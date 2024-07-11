import React, { useContext, useState } from "react";
import { useProductContext } from "../context/productContext";
import "../Styles/ordercard.css";
import { PlusIcon, XIcon } from "@heroicons/react/outline";
import { IoRemoveOutline } from "react-icons/io5";

const Ordercard = (props) => {
  const { id, title, imgUrl, price, countOfProducts, handleDelete } = props;

  const [productCount, setProductCount] = useState(
    countOfProducts != undefined ? countOfProducts : 1
  );
  const { cart, updateTotalPriceOfProducts } = useProductContext();

  const reduceProductCount = () => {
    if (productCount <= 1) {
      setProductCount(1);
    } else {
      setProductCount(productCount - 1);
      const indexOfProduct = searchProductIndexInsideArray(id, cart);
      cart[indexOfProduct].count = productCount - 1;
      updateTotalPriceOfProducts();
    }
  };

  const searchProductIndexInsideArray = (id, arr) => {
    const obj = arr.find((element) => element.id === id);
    const indexOfObj = arr.indexOf(obj);

    return indexOfObj;
  };

  const increaseProductCount = () => {
    setProductCount(productCount + 1);
    const indexOfProduct = searchProductIndexInsideArray(id, cart);
    cart[indexOfProduct].count = productCount + 1;

    updateTotalPriceOfProducts();
  };

  return (
    <div>
      <div class="order-card">
        <div class="order-card-content">
          <figure class="order-card-image">
            <img src={imgUrl} alt="Product Title" className="image" />
          </figure>
          <div class="order-card-details">
            <span class="order-card-title">{title}</span>
            <span class="order-card-price">${price}</span>
            <div class="order-card-quantity">
              <IoRemoveOutline
                class="order-card-button minus"
                onClick={reduceProductCount}
              ></IoRemoveOutline>
              <div class="order-card-count">{productCount}</div>
              <PlusIcon
                class="order-card-button plus"
                onClick={increaseProductCount}
              ></PlusIcon>
            </div>
          </div>
        </div>
        <XIcon
          class="order-card-delete"
          onClick={() => handleDelete(id)}
        ></XIcon>
      </div>
    </div>
  );
};

export default Ordercard;
