import React, { createContext, useState, useContext, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [productToShow, setProductToShow] = useState(null);
  const [isCheckoutSideMenuOpen, setCheckOutMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPriceOfProducts, setTotalPriceOfProducts] = useState(0);
  const [order, setOrder] = useState([]);

  const handleCardClick = (product) => {
    console.log(product);
    setProductToShow(product);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setProductToShow(null);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    openCheckOutSideMenu();
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const openCheckOutSideMenu = () => {
    setShowCart(true);
  };
  const closeCheckOutSideMenu = () => {
    setShowCart(false);
  };

  const updateTotalPriceOfProducts = () => {
    const total = cart.reduce(
      (sum, product) => sum + product.price * (product.count || 1),
      0
    );
    setTotalPriceOfProducts(total);
  };

  useEffect(() => {
    updateTotalPriceOfProducts();
  }, [cart]);

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.12.2024",
      products: cart,
      totalProducts: cart.length,
      totalPrice: totalPriceOfProducts,
    };
    console.log("Order to add:", orderToAdd);
    setOrder((prevOrder) => {
      const updatedOrder = [...prevOrder, orderToAdd];
      console.log("Updated order:", updatedOrder);
      return updatedOrder;
    });

    //   setOrder((prevOrder) => [...prevOrder, orderToAdd]);

    console.log("Updated order:", order);
    setCart([]);
  };

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(null);
  const [searchTitleBar, setSearchTitleBar] = useState("");
  const [searchByCategory, setSearchByCategory] = useState(null);

  const cleanTitlebarState = () => {
    setSearchTitleBar(null);
  };

  const filterBy = (searchType, items, searchTitleBar, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchTitleBar);
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchTitleBar.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };

  const filteredItemsByTitle = (items, searchByTitle) => {
    if (!items) return [];
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    if (!items) return [];
    return items.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchTitleBar && searchByCategory) {
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchTitleBar,
          searchByCategory
        )
      );
    }
    if (searchTitleBar && !searchByCategory) {
      setFilteredItems(
        filterBy("BY_TITLE", items, searchTitleBar, searchByCategory)
      );
    }
    if (!searchTitleBar && searchByCategory) {
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchTitleBar, searchByCategory)
      );
    }

    if (!searchTitleBar && !searchByCategory) {
      setFilteredItems(filterBy(null, items, searchTitleBar, searchByCategory));
    }
  }, [items, searchTitleBar, searchByCategory]);

  return (
    <ProductContext.Provider
      value={{
        showDetails,
        productToShow,
        handleCardClick,
        handleCloseDetails,
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        setCart,
        openCheckOutSideMenu,
        closeCheckOutSideMenu,
        totalPriceOfProducts,
        setTotalPriceOfProducts,
        updateTotalPriceOfProducts,
        showCart,
        setShowCart,
        order,
        setOrder,
        handleCheckout,
        items,
        setItems,
        searchTitleBar,
        setSearchTitleBar,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
              cleanTitlebarState,
              isCheckoutSideMenuOpen,
              setCheckOutMenuOpen
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the Product context
export const useProductContext = () => useContext(ProductContext);
