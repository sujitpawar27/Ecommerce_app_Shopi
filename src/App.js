import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import MyOrders from "./pages/myOrders";
import CheckoutSideMenu from "./components/CheckOutSideMenu";
import MyAccount from "./components/MyAccount";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Home />} />
        <Route path="/Electronics" element={<Home />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/checkout" element={<CheckoutSideMenu />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
    </div>
  );
}

export default App;
