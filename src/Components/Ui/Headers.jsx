import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
function Headers() {
  const [show, setshow] = useState(false);

  let handlebuttonMenu = () => {
    return setshow(!show);
  };
 const closeMenu = () => {
    setshow(false);
  };
  return (
    <div>
      <header>
        <div>
          <Link className="nav-items" to="/">
            <h1>WorldAtlas</h1>
          </Link>
        </div>
        <div  className={show ? "menu-mobile" : "menu-web"}>
          <div className="menu-links">
            <ul>
              <li>
                <Link className="nav-items" to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-items" to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-items" to="/country" onClick={closeMenu}>
                  Country
                </Link>
              </li>
              <li>
                <Link className="nav-items" to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="ham-menu">
          <button onClick={handlebuttonMenu}>
            <GiHamburgerMenu className="menu-icon" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Headers;
