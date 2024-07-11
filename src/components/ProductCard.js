import React, { useState } from "react";
import "../Styles/products.css";
import ProductDetails from "./ProductDetail";
import { useProductContext } from "../context/productContext";
import { CheckIcon, PlusIcon } from "@heroicons/react/outline";

const ProductCard = ({ product }) => {
  const { cart, handleCardClick, handleAddToCart } = useProductContext();

  const addProductToCart = (event) => {
    console.log("clicked");
    event.stopPropagation();
    handleAddToCart(product);
  };

  const renderIcon = (id) => {
    const isInCart = cart.filter((element) => element.id === id).length > 0;

    if (isInCart) {
      return (
        <button className="checkicon">
          <CheckIcon></CheckIcon>
        </button>
      );
    } else {
      return (
        <button
          className="addicon"
          onClick={(event) => {
            addProductToCart(event, product);
          }}
        >
          <PlusIcon />
        </button>
      );
    }
  };
  return (
    <div className="card">
      <figure className="figure" onClick={() => handleCardClick(product)}>
        <span id="image-info">{product.category.name}</span>
        <img
          src={product.images[0]}
          className="card-image"
          alt={product.title}
        />
        {renderIcon(product.id)}
      </figure>
      <div className="card-body">
        <span className="card-title">{product.title}</span>
        <span className="card-text">{product.price}$</span>
      </div>
    </div>
  );
};

export default ProductCard;
