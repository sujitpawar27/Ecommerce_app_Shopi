import React, { useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../Styles/products.css";
import { useProductContext } from "../context/productContext";
import ProductDetails from "./ProductDetail";

const ProductList = () => {
  const {
    filteredItems,
    setItems,
    showDetails,
    productToShow,
    handleCloseDetails,
  } = useProductContext();

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        console.log(response); // Log the response
        setItems(response.data);
      })
      .catch((error) => console.error(error));
  }, [setItems]);

  return (
    <div>
      <div className="container">
        {filteredItems && filteredItems.length > 0 ? (
          filteredItems.map((product) => (
            <div className="products" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      {showDetails && (
        <div className="product-details-container">
          <ProductDetails
            product={productToShow}
            onClose={handleCloseDetails}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;
