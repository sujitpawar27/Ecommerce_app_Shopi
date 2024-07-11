import React from "react";
import "../Styles/navbar.css"; // Assuming you have custom styles
import usericon from "../svgs/usericon.svg";
import carticon from "../svgs/carticon.svg";
import { useProductContext } from "../context/productContext";
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart, cleanTitlebarState, setSearchByCategory } = useProductContext();

  return (
    <div style={{ zIndex: "3", backgroundColor: "white" }}>
      <nav className="navbar">
        <div className="navbar-toggle" id="navbar-toggle">
          &#9776;
        </div>
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
      </nav>
      <hr id="hrline"></hr>
    </div>
  );
};

export default Navbar;
