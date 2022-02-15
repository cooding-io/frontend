
function NavBar() {

    return ( <nav className="main-nav" role="navigation">
    {/* Mobile menu toggle button (hamburger/x icon) */}
    <input id="main-menu-state" type="checkbox" />
    <label className="main-menu-btn" htmlFor="main-menu-state">
      <span className="main-menu-btn-icon" /> Toggle main menu visibility
    </label>
    {/* Sample menu definition */}
    <ul id="main-menu" className="sm sm-blue">
      <li  ><a href="index.html"><i data-feather="code" />IDE</a></li>		  
      <li><a href="mailbox.html"><i data-feather="database" />Database</a></li>
      <li><a href="extra_calendar.html"><i data-feather="terminal" />Terminal</a></li>
      <li><a href="contact_app_chat.html"><i data-feather="folder" />Courses</a></li>
      <li><a href="contact_app_chat.html"><i data-feather="codepen" />Udpiler</a></li>
      <li><a href="contact_app_chat.html"><i data-feather="user" />Profile</a></li>


    </ul>
  </nav>)
}

export default NavBar;