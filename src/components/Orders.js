import React from "react";
import { FaRegCalendarDays } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import { BsChevronRight } from "react-icons/bs";
import "../Styles/orders.css";

const Orders = (props) => {
  const { totalPrice, totalProducts } = props;
  console.log("in orders component");
  return (
    <div>
      <h1 className="heading1"> MyOrders</h1>
      <div className="card-container">
        <div className="grid-container">
          <div className="inside-container">
            <div className="inside-container2">
              <div className="date-info">
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                    fontSize: "larger",
                    fontWeight: "200",
                  }}
                >
                  <FaRegCalendarDays />
                  01.02.23
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                    fontSize: "larger",
                    fontWeight: "400",
                  }}
                >
                  <HiShoppingBag />
                  {totalProducts}
                </span>
              </div>
            </div>
            <div className="price-info">
              <span className="bold-text">${totalPrice}</span>
              <BsChevronRight className="h-6 w-6 text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
