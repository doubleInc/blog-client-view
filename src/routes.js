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
    'users/:id': 'userDetail'
  },

  public: function() {
    //
    $("head")
      .append(utils.uiKitCss)
      .append(utils.uiKitJS)
      .append(utils.uiKitIcons);

    //...
    $("body").html(utils.navBar);
  },

  login: function() {
    //...
    let that = this;
    $("body")
      .html(utils.navBar)
      .append(utils.mainContainer);

    $("#loginBtn").click(function(event) {
      const usr = $("#username").val();
      const pwd = $("#password").val();
      let jwt_token = "";

      event.preventDefault();

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
          //console.log(jwt_token);
          if (jwt_token !== null) {
            console.log(jwt_token);
            localStore.token = jwt_token;

            that.redirectTo("blog");
          }
        })
        .catch(err => {
          console.log(err);
          that.redirectTo("");
        });
    });
  },

  blogMain: function() {
    //...
    $("body")
      .html(utils.loggedIn)
      .append(utils.blogInterface);
  },

  userDetail: function(id) {
    $("body").html(id);
  }
});
