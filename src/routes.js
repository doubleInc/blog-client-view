import AmpersandRouter from "ampersand-router";
import $ from "jquery";
import utils from "./utils";

export default AmpersandRouter.extend({
  routes: {
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
    $("body").prepend(utils.navBar);
  },

  login: function() {
    //...
    $("#app").html(utils.mainContainer);
  }
});
