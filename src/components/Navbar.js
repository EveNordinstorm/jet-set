import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PropTypes from "prop-types";
import "./Navbar.css";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL ?? "";

if (!apiBaseUrl) {
  throw new Error(
    "API base URL is not defined. Please set the REACT_APP_API_BASE_URL environment variable."
  );
}

export default function NavbarComponent({ direction }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { openCart, cartQuantity } = useCart();
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

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <nav className="navbar bg-zinc-900">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              className="jet-set-logo"
              src={`${apiBaseUrl.replace(
                "/api",
                ""
              )}/Images/jet-set-logo-white.png`}
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

            <Link to="/cart" className="cart-icon nav-links" onClick={openCart}>
              <svg
                className="cart-svg"
                width="35px"
                aria-hidden="true"
                viewBox="0 0 377.82 367.39"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="m0,11.83c.39-.58.89-1.11,1.17-1.74C4.13,3.47,9.34.13,16.47.08c15.47-.12,30.94-.1,46.41-.01,8.41.05,13.81,4.04,16.5,12.02,4.73,14.01,9.4,28.05,14.1,42.08,2.55,7.63,5.67,9.88,13.76,9.88,84.22,0,168.43,0,252.65,0,9.89,0,16.25,4.47,17.72,13.02.48,2.8.09,6.02-.82,8.75-13.82,41.89-27.78,83.74-41.75,125.58-2.88,8.62-8.18,12.27-17.41,12.27-55.52,0-111.04,0-166.56,0-8.58,0-11.35,2.16-13.39,10.37-.84,3.38-1.75,6.74-2.55,10.14-1.48,6.29,1.86,10.9,8.27,11.45,1.24.11,2.49.04,3.74.04,62.01,0,124.02.02,186.03-.03,4.49,0,8.67.59,12.28,3.52,5.04,4.09,7.13,10.98,5.15,17.18-2.05,6.39-7.46,10.67-14.04,11.07-1.12.07-2.24.07-3.37.07-62.63,0-125.27.02-187.9,0-20.91,0-37.31-13.11-41.62-33.21-1.36-6.33-.91-12.63.7-18.88,1.21-4.7,2.24-9.45,3.54-14.12,2.43-8.69,1.89-17.19-.96-25.71-17.2-51.39-34.33-102.8-51.49-154.21-2.33-6.99-5.58-9.3-12.99-9.31-8.23,0-16.47-.09-24.7.02-8.29.11-14.11-3.33-17.04-11.25-.11-.3-.47-.5-.72-.75,0-2.74,0-5.49,0-8.23Z"
                ></path>
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="m121.29,367.39c-1.06-.51-2.07-1.14-3.18-1.5-14.74-4.79-24.34-19.82-22.03-34.53,2.55-16.21,15.26-27.51,31.22-27.75,15.79-.24,29.19,10.84,31.98,26.43,3.05,17.05-8.7,33.83-25.66,36.66-.39.07-.73.46-1.1.69h-11.23Z"
                ></path>
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="m312.96,367.39c-1.06-.51-2.07-1.14-3.18-1.5-14.74-4.79-24.34-19.82-22.03-34.53,2.55-16.21,15.26-27.51,31.22-27.75,15.79-.24,29.19,10.84,31.98,26.43,3.05,17.05-8.7,33.83-25.66,36.66-.39.07-.73.46-1.1.69h-11.23Z"
                ></path>
              </svg>
              <div className="cart-counter">{cartQuantity}</div>
            </Link>

            {!isAuthenticated && (
              <li>
                <Link
                  id="qsLoginBtn"
                  className="nav-links-mobile"
                  onClick={() => loginWithRedirect()}
                >
                  Log in
                </Link>
              </li>
            )}
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
            <div>
              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                  <NavDropdown
                    className="text-white mt-5 ml-32 lg:ml-4"
                    id="nav-dropdown-dark-example"
                    title={
                      <span onClick={toggleDropdown}>
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        Profile
                      </span>
                    }
                    menuVariant="dark"
                    show={dropdownOpen}
                    onToggle={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <div className="bg-zinc-900 rounded-b p-3">
                      <NavDropdown.Item
                        href="/profile"
                        className="flex items-center"
                      >
                        <img
                          src={user.picture}
                          alt="Profile"
                          className="rounded-full text-white my-2 mr-2"
                          width="30"
                        />
                        {user.name}
                      </NavDropdown.Item>

                      <NavDropdown.Divider />

                      <NavDropdown.Item
                        className="text-white"
                        id="qsLogoutBtn"
                        onClick={() => logoutWithRedirect()}
                      >
                        <FontAwesomeIcon
                          icon={faPowerOff}
                          className="text-white mr-3 mt-4"
                        />{" "}
                        Log out
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

NavbarComponent.propTypes = {
  direction: PropTypes.string,
};
