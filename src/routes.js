import AmpersandRouter from "ampersand-router"; // router
import $ from "jquery"; // DOM updates
import utils from "./utils"; // mostly stored HTML to feed views
import { createApolloFetch } from "apollo-fetch"; // apollo's fetch method to query graphql server

// location of graphql server
const fetch = createApolloFetch({
  uri: "http://localhost:4000/"
});

// to hold app values, hacky method to pass values between views
var localStore = {
  token: null
};

export default AmpersandRouter.extend({
  routes: {
    // matching url to handler
    "": "public",
    // prettier-ignore
    "login": "login",
    // prettier-ignore
    "blog": "blogMain",
    // prettier-ignore
    'blog/posts': 'allPosts',
    // prettier-ignore
    'logout': 'logout',

    // prettier-ignore
    'blog/posts/:id': 'singlePost'
  },

  // root page
  public: function() {
    // add external css+js files for styling
    $("head")
      .append(utils.uiKitCss)
      .append(utils.uiKitJS)
      .append(utils.uiKitIcons);

    //...
    $("body")
      .html(utils.navBar)
      .append(utils.rootPageSection);
  },

  login: function() {
    // reference current route to call from within callbacks
    let currentRoute = this;
    $("body")
      .html(utils.navBar)
      .append(utils.mainContainer);

    $("#loginBtn").click(function(event) {
      const usr = $("#username").val();
      const pwd = $("#password").val();
      let jwt_token = "";

      event.preventDefault();

      //graphql query
      fetch({
        query: `query authLogin($email: String!, $password: String!){
            login(email: $email, password: $password) {
            auth_token
        }
        }`,
        variables: { email: usr, password: pwd }
      })
        .then(res => {
          jwt_token = res.data.login.auth_token;

          if (jwt_token !== null) {
            localStore.token = jwt_token;

            currentRoute.redirectTo("blog");
          }
        })
        .catch(err => {
          // not doing anything error for now ...
          currentRoute.redirectTo("");
        });
    });
  },

  blogMain: function() {
    let currentRoute = this;
    //...
    $("body")
      .html(utils.loggedIn)
      .append(utils.blogInterface);

    // catch blog post inputs
    $("#addPost").click(function(event) {
      const title = $("#blogTitle").val();
      const content = $("#blogContent").val();

      event.preventDefault();

      fetch(
        {
          query: `mutation 
          addPost($title: String!, $content: String!) {
            post(title: $title, content: $content) {
              id
            }
          }
         `,
          variables: { title: title, content: content }
        },

        // Header options
        {
          Authorization: localStore.token
        }
      ).then(res => {
        //currentRoute.redirectTo("blog/posts");
        currentRoute.reload();
      });
    });
  },

  allPosts: function() {
    // reference current route to call from within callbacks
    let currentRoute = this;

    if (localStore.token !== null) {
      $("body").html(utils.loggedIn);
      //get all posts
      fetch(
        {
          query: `query 
            getAllPosts {
              posts {
              id
              title
              content
              created_at
              }
            }
         `
        },
        // Header options
        {
          Authorization: localStore.token
        }
      ).then(res => {
        res.data.posts.forEach(post => {
          $("body").append(
            utils.postCard(post.id, post.title, post.content, post.created_at)
          );
        });
      });
    } else {
      // no token then route to homepage
      currentRoute.redirectTo("");
    }
  },

  // logout
  logout: function() {
    // remove jwt token
    localStore.token = null;
    this.redirectTo("");
  },

  // just for testing...
  singlePost: function(id) {
    $("body").html(id);
  }
});
