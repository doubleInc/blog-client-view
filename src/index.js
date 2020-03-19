import Router from "./routes";
import app from "ampersand-app";
import "./style.css";

// not really needed...
window.app = app;

app.extend({
  init() {
    this.router = new Router();
    // initialize route tracking in the browser history
    this.router.history.start({ pushState: false });
  }
});

//start app
app.init();
