/**
 * HTML to feed views
 * NOTE: I realised I could compose these after about 100 lines of html xD
 */

export default {
  uiKitCss:
    "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/uikit@3.3.6/dist/css/uikit.min.css'/>",

  uiKitJS:
    '<script src="https://cdn.jsdelivr.net/npm/uikit@3.3.6/dist/js/uikit.min.js"></script>',
  uiKitIcons:
    '<script src="https://cdn.jsdelivr.net/npm/uikit@3.3.6/dist/js/uikit-icons.min.js"></script>',

  //
  navBar: `
    <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li>
                <a href="#">Menu</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class=""><a href='/'>Home</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>
    <div class="uk-navbar-center"><h3 class="uk-text-light">CRUD Blog V2.0</h3></div>
    </nav>`,

  mainContainer: `
    <div class="uk-flex uk-flex-center uk-margin-top">
        <div class="uk-card uk-card-default uk-card-body uk-margin-left">
            <form action="">

            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input class="uk-input" type="text" id="username">
                </div>
            </div>
        
            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                    <input class="uk-input" type="password" id="password">
                </div>
            </div>
            <button class="uk-button uk-button-default" id="loginBtn">Login</button>
            </form>
        
        </div>
    </div>`,

  loggedIn: `<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li>
                <a href="#logout">Logout</a>
            </li>
            <li>
                <a href="#blog/posts">All Posts</a>
            </li>
        </ul>

    </div>
    </nav>`,

  blogInterface: `<div class="uk-flex uk-flex-center uk-margin-top">
  <form>
  <fieldset class="uk-fieldset">

      <legend class="uk-legend">New blog Post: </legend>

      <div class="uk-margin">
          <input class="uk-input" type="text" placeholder="Blog Title" id="blogTitle">
      </div>

      <div class="uk-margin">
          <textarea class="uk-textarea" rows="5" placeholder="..." id="blogContent"></textarea>
      </div>

      <button class="uk-button uk-button-secondary" id="addPost">Submit</button>
            

    </fieldset>
    </form>  
  </div>`,

  rootPageSection: `<div class="uk-section uk-section-default container uk-margin-top">
  <div class="uk-container">

      <h3>A Blogging Platform</h3>
      <div class="uk-flex uk-flex-center">
          <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
    </div>
    </div>`,

  postCard: function(id, title, content, dateCreated) {
    return `<div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <h3 class="uk-card-title"><a href="#blog/posts/${id}">${title}</a></h3>
        <p>${content}</p>
      </div>`;
  }
};
