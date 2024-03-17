import React, { useState, useEffect } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

import {
  Collapse,
  Container,
  // Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              className="jet-set-logo"
              src="/Jet Set Logo-01.png"
              alt="Jet Set Logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/holidays"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Holidays
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                id="qsLoginBtn"
                className="nav-links-mobile"
                onClick={() => loginWithRedirect()}
              >
                Log in
              </Link>
            </li>
          </ul>
          {!isAuthenticated && button && (
            <Button
              id="qsLoginBtn"
              buttonStyle="btn--blue"
              buttonSize="btn--medium"
              onClick={() => loginWithRedirect()}
            >
              Log in
            </Button>
          )}
          {isAuthenticated && (
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret id="profileDropDown">
                <img
                  src={user.picture}
                  alt="Profile"
                  className="nav-user-profile rounded-circle text-white"
                  width="50"
                />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className="text-white" header>
                  {user.name}
                </DropdownItem>
                <DropdownItem
                  tag={RouterNavLink}
                  to="/profile"
                  className="dropdown-profile text-white"
                  activeClassName="router-link-exact-active"
                >
                  <FontAwesomeIcon icon={faUser} className="mr-3 text-white" />{" "}
                  Profile
                </DropdownItem>
                <DropdownItem
                  className="text-white"
                  id="qsLogoutBtn"
                  onClick={() => logoutWithRedirect()}
                >
                  <FontAwesomeIcon
                    icon={faPowerOff}
                    className="mr-3 text-white"
                  />{" "}
                  Log out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
