import React, { useState } from "react";
import "../Styles/navbar.css"; // Assuming you have custom styles
import { FaUserCircle } from "react-icons/fa";
import carticon from "../svgs/carticon.svg";
import { useProductContext } from "../context/productContext";
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FaInbox } from "react-icons/fa6";
import { HiArchiveBox } from "react-icons/hi2";

const Navbar = () => {
  const {
    isCheckoutSideMenuOpen,
    cart,
    cleanTitlebarState,
    setSearchByCategory,
    openCheckOutSideMenu,
    closeCheckOutSideMenu,
  } = useProductContext();
  const [userMenuIsActive, setUserMenuIsActive] = useState(false);

  return (
    <div style={{ zIndex: "3", backgroundColor: "white" }}>
      <nav className="navbar">
        {/* <div className="navbar-toggle" id="navbar-toggle">
        <FaUserCircle />
        </div> */}
        <div className="navbar-menu" id="navbar-menu">
          <ul className="navbar-nav">
            <span id="navbar-brand">Shopi</span>
            <li className="nav-item">
              {" "}
              <NavLink
                exact
                to="/"
                onClick={() => {
                  cleanTitlebarState();
                  setSearchByCategory("");
                }}
              >
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/clothes"
                onClick={() => {
                  setSearchByCategory("clothes");
                }}
              >
                Clothes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Electronics"
                onClick={() => {
                  setSearchByCategory("Electronics");
                }}
              >
                Electronics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/furnitures">
                Furniture
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/toys">
                Toys
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav" id="navbar-nav01">
            <li className="nav-item">
              <a href="#" style={{ color: "gray" }}>
                userintheapp@test.com
              </a>
            </li>
            <li className="nav-item">
              <a href="/orders">My Orders</a>
            </li>
            <li className="nav-item">
              <a href="/myaccount">My Account</a>
            </li>
            <li className="nav-item">
              <a href="/checkout">
                <MdShoppingCart class="cart-icon"></MdShoppingCart>{" "}
                {cart.length}
              </a>
            </li>
          </ul>
        </div>
        <ul className="navbar-toggle" id="navbar-toggle">
          <FaUserCircle
            onClick={(event) => {
              setUserMenuIsActive(!userMenuIsActive);
              console.log(!userMenuIsActive);
              cleanTitlebarState();
              closeCheckOutSideMenu();
            }}
          />
          <CSSTransition
            in={userMenuIsActive}
            nodeRef={null}
            timeout={1000}
            classNames={"fade"}
          >
            <div
              className={`${
                userMenuIsActive ? "menu-visible" : "menu-hidden"
              } dropdown-menu-container`}
            >
              <ul className="dropdown-menu">
                <li className="inboxicon ">
                  <FaInbox
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      color: "#000",
                      cursor: "pointer",
                    }}
                  />
                  <p>userintheapp@test.com</p>
                </li>
                <li className="archivbox ">
                  <HiArchiveBox
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      color: "#000",
                      cursor: "pointer",
                    }}
                  />
                  <NavLink
                    to="/myorders"
                    onClick={() => {
                      cleanTitlebarState();
                    }}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p>My Orders</p>
                  </NavLink>
                </li>
                <li className="usercircleicon">
                  <FaUserCircle className="h-6 w-6 text-black-500 " />
                  <NavLink
                    onClick={() => {
                      cleanTitlebarState();
                    }}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p className="">My Account</p>
                  </NavLink>
                </li>
                <li className="shoppingcarticon ">
                  <p style={{ display: "flex", gap: "24px" }}>
                    <MdShoppingCart
                      onClick={() => {
                        cleanTitlebarState();
                        isCheckoutSideMenuOpen
                          ? closeCheckOutSideMenu()
                          : openCheckOutSideMenu();
                      }}
                      className="h-6 w-6 text-black-500 cursor-pointer"
                    />
                    {cart.length}
                  </p>
                </li>
              </ul>
            </div>
          </CSSTransition>
        </ul>
      </nav>
      <hr id="hrline"></hr>
    </div>
  );
};

export default Navbar;
