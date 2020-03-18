import Router from "./routes";
import app from "ampersand-app";

// matching url to handler

window.app = app;

app.extend({
  init() {
    this.router = new Router();
    this.router.history.start({ pushState: false });
  }
});

app.init();
