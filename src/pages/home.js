import React from "react";
import "../Styles/home.css";
import ProductList from "../components/ProductList";
import CheckoutSideMenu from "../components/CheckOutSideMenu";
import { useProductContext } from "../context/productContext";

const Home = () => {
  const { searchTitleBar, setSearchTitleBar } = useProductContext();
  return (
    <div>
      <div className="header-container">
        <h1 id="heading" style={{ marginTop: "60px" }}>
          Home
        </h1>
        <div>
          <form className="search-form">
            <input
              type="text"
              placeholder="Search a product"
              value={searchTitleBar}
              onChange={(event) => setSearchTitleBar(event.target.value)}
            />
          </form>
        </div>
      </div>
      <ProductList />
      <CheckoutSideMenu />
    </div>
  );
};

export default Home;
