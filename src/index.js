import Router from "./routes";
import app from "ampersand-app";
import "./style.css";

window.app = app;

app.extend({
  init() {
    this.router = new Router();
    this.router.history.start({ pushState: false });
  }
});

app.init();
