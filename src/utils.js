/**
 *
 *
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
                        <li class="uk-nav-header">Header</li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>
    <div class="uk-navbar-center"><h3>CRUD Blog</h3></div>
    </nav>`,

  mainContainer: `
    <div class="uk-flex uk-flex-center uk-margin-top">
        <div class="uk-card uk-card-default uk-card-body uk-margin-left">
            <form>

            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input class="uk-input" type="text">
                </div>
            </div>
        
            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                    <input class="uk-input" type="text">
                </div>
            </div>
            <button class="uk-button uk-button-default">Login</button>
            </form>
        
        </div>
    </div>`
};
