import AmpersandRouter from "ampersand-router";
import $ from "jquery";
import utils from "./utils";
import authUser from "./data-fetching";
import { createApolloFetch } from "apollo-fetch";

const fetch = createApolloFetch({
  uri: "http://localhost:4000/"
});

export default AmpersandRouter.extend({
  routes: {
    // matching url to handler
    "": "public",
    // prettier-ignore
    "login": "login"
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
            //that.redirectTo("");
          }
        })
        .catch(err => {
          console.log(err);
          that.redirectTo("");
        });
    });

    //this.redirectTo("");
  }
});
