import { useEffect } from "react";
import { useProductContext } from "../context/productContext";
import { Link } from "react-router-dom";
import { EmptyOrdersIcon } from "./EmptyOrdersIcon";

import "../Styles/myOrders.css";
import Orders from "../components/Orders";

const MyOrders = () => {
  const { order } = useProductContext();
  useEffect(() => {
    console.log("Updated order:", order);
  }, [order]);

  if (order?.length > 0) {
    return (
      <>
        {order.map((order, index) => (
          <Link key={index} to={`/orders`} style={{ textDecoration: "none" }}>
            <Orders
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </>
    );
  } else {
    return (
      <>
        <div className="empty-orders-icon">
          <div className="icon-figure">
            <EmptyOrdersIcon />
          </div>
          <div>
            <p className="message">
              Nothing yet, add some products and check them out :)
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default MyOrders;
