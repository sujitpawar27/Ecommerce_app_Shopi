import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { XIcon } from "@heroicons/react/outline";
import "../Styles/checkoutSideMenu.css";
import { useProductContext } from "../context/productContext";
import Ordercard from "./Ordercard";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
  const {
    cart,
    showCart,
    setCart,
    closeCheckOutSideMenu,
    totalPriceOfProducts,
    handleCheckout,
  } = useProductContext();
  const nodeRef = useRef(null);

  const handleDelete = (id) => {
    const filteredProducts = cart.filter((product) => product.id !== id);
    setCart(filteredProducts);
    console.log("handledelete");
  };

  const addProductsTomyorder = (event) => {
    console.log("clicked");
    handleCheckout();
  };

  return (
    <CSSTransition
      in={showCart}
      classNames="fade"
      timeout={3}
      nodeRef={nodeRef}
      unmountOnExit
    >
      <aside className="product-content">
        <div className="header">
          <h2>My Order</h2>
          <div>
            <XIcon onClick={closeCheckOutSideMenu} className="close-icon" />
          </div>
        </div>

        <div className="content">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((product) => (
              <Ordercard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                imgUrl={product.images[0]}
                handleDelete={handleDelete}
              />
            ))
          )}
        </div>
        <div className="checkoutBox">
          <p style={{ marginBottom: "0.6px" }}>
            <span className="price" style={{ marginRight: "200px" }}>
              Total :{" "}
            </span>
            <span style={{ fontWeight: "700" }}>${totalPriceOfProducts}</span>
          </p>
          <Link to="/orders">
            <button
              className="checkout"
              onClick={() => {
                addProductsTomyorder();
                closeCheckOutSideMenu();
              }}
            >
              Checkout
            </button>
          </Link>
        </div>
      </aside>
    </CSSTransition>
  );
};

export default CheckoutSideMenu;
