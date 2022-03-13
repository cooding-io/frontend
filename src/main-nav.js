import { Link } from "react-router-dom";

function NavBar() {

    return ( <nav className="main-nav" role="navigation">
    {/* Mobile menu toggle button (hamburger/x icon) */}
    <input id="main-menu-state" type="checkbox" />
    <label className="main-menu-btn" htmlFor="main-menu-state">
      <span className="main-menu-btn-icon" /> Toggle main menu visibility
    </label>
    {/* Sample menu definition */}
    <ul id="main-menu" className="sm sm-blue">
      <li  ><any> <Link to="/app/"><i data-feather="code" />IDE</Link> </any> </li>		  
      <li><any> <Link to="/app/database"><i data-feather="database" />Database</Link> </any> </li>
      <li><any> <Link to="/app/terminal"><i data-feather="terminal" />Terminal</Link> </any> </li>
      <li><any> <Link to="/app/courses"><i data-feather="folder" />Courses</Link> </any> </li>
      <li><any> <Link to="/app/udpiler"><i data-feather="codepen" />Udpiler</Link> </any> </li>
      <li><any> <Link to="/app/profile"><i data-feather="user" />Profile</Link> </any> </li>


    </ul>
  </nav>)
}

export default NavBar;