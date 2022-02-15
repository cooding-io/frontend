


function Header() {
    return (<header className="main-header">
    <div className="inside-header">
      <div className="d-flex align-items-center logo-box justify-content-start">
        {/* Logo */}
        <a href="index.html" className="logo">
          {/* logo*/}
          <div className="logo-lg text-white">
            <h3>Cooding.io</h3>
          </div>
        </a>	
      </div>  
      {/* Header Navbar */}
      <nav className="navbar navbar-static-top">
        {/* Sidebar toggle button*/}
        <div className="app-menu">
          <ul className="header-megamenu nav">
            <li className="btn-group d-md-inline-flex d-none">
              <div className="app-menu">
                <div className="search-bx mx-5">
                  <form>
                    <div className="input-group">
                      {/* <input type="search" className="form-control" placeholder="Buscar" />
                      <div className="input-group-append">
                        <button className="btn" type="submit" id="button-addon3"><i className="icon-Search"><span className="path1" /><span className="path2" /></i></button>
                      </div> */}
                    </div>
                  </form>
                </div>
              </div>
            </li>
          </ul> 
        </div>
        <div className="navbar-custom-menu r-side">
          <ul className="nav navbar-nav">
            <li className="dropdown notifications-menu btn-group">
              <a href="#" className="waves-effect waves-light btn-primary-light svg-bt-icon" data-bs-toggle="dropdown" title="Notifications">
                <i data-feather="bell" />
                <div className="pulse-wave" />
              </a>
              <ul className="dropdown-menu animated bounceIn">
                <li className="header">
                  <div className="p-20">
                    <div className="flexbox">
                      <div>
                        <h4 className="mb-0 mt-0">Notifications</h4>
                      </div>
                      <div>
                        <a href="#" className="text-danger">Clear All</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  {/* inner menu: contains the actual data */}
                  <ul className="menu sm-scrol">
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-info" /> Curabitur id eros quis nunc suscipit blandit.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-warning text-warning" /> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-danger" /> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart text-success" /> In gravida mauris et nisi
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user text-danger" /> Praesent eu lacus in libero dictum fermentum.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user text-primary" /> Nunc fringilla lorem 
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user text-success" /> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View all</a>
                </li>
              </ul>
            </li>
            <li className="btn-group nav-item d-xl-inline-flex d-none">
              <a href="#" className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title id="live-chat">
                <i data-feather="message-circle" />
              </a>
            </li>
            <li className="btn-group d-xl-inline-flex d-none">
              <a href="#" className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon dropdown-toggle" data-bs-toggle="dropdown">
                <img className="rounded-circle" src="/app/images/svg-icon/spain.svg" alt="" />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item my-5" href="#"><img className="w-20 rounded me-10" src="/app/images/svg-icon/spain.svg" alt="" /> Spanish</a>
                <a className="dropdown-item my-5" href="#"><img className="w-20 rounded me-10" src="/app/images/svg-icon/usa.svg" alt="" /> English</a>
              </div>
            </li>
            <li className="btn-group nav-item d-xl-inline-flex d-none">
              <a href="#" data-provide="fullscreen" className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="Full Screen">
                <i data-feather="maximize" />
              </a>
            </li>
            {/* User Account*/}
            <li className="dropdown user user-menu">
              <a href="#" className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow" title="User" data-bs-toggle="modal" data-bs-target="#quick_user_toggle">
                <div className="d-flex pt-1">
                  <div className="text-end me-10">
                    <p className="pt-5 fs-14 mb-0 fw-700 text-white">Manuel Alba</p>
                    <small className="fs-10 mb-0 text-uppercase text-mute">Admin</small>
                  </div>
                  <img src="/app/images/avatar/avatar-13.png" className="avatar rounded-circle bg-primary-light h-40 w-40" alt="" />
                </div>
              </a>
            </li>						  
            {/* Control Sidebar Toggle Button */}
            <li className="btn-group nav-item d-xl-inline-flex d-none">
              <a href="#" data-toggle="control-sidebar" title="Setting" className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon me-0">
                <i data-feather="sliders" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>)
}

export default Header;