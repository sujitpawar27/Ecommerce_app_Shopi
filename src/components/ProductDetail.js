import React from "react";
import { CSSTransition } from "react-transition-group";
import { XCircleIcon, XIcon } from "@heroicons/react/outline";
import "../Styles/productDetails.css";
import { useProductContext } from "../context/productContext";

const ProductDetails = () => {
  // console.log(product);
  const { showDetails, productToShow, handleCloseDetails } =
    useProductContext();

  return (
    <CSSTransition
      in={showDetails}
      classNames="fade"
      timeout={0.1}
      unmountOnExit
    >
      <aside className="product-details ">
        <div className="header">
          <h2>Detail</h2>
          <XIcon onClick={handleCloseDetails} className="close-icon" />
        </div>

        <div className="content">
          <img
            src={productToShow.images[0]}
            alt={productToShow.title}
            className="productdetailsimage"
          />
          <p>
            <span className="price">${productToShow.price}</span>
            <br />
            <span className="title">{productToShow.title}</span>
            <br />
            <span className="description">{productToShow.description}</span>
          </p>
        </div>
      </aside>
    </CSSTransition>
  );
};

export default ProductDetails;
