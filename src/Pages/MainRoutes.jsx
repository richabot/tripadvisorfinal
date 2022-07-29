import React from "react";
import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line
import Footer from "../Components/Footer/Footer";
import Homepage from "../Components/Homepage/Homepage";
import Signinnew from "../Components/signin/Signinnew";
import Signupnew from "../Components/signin/Signupnew";
// eslint-disable-next-line
import SubPageHeader from "../Components/SubPageHeader/SubPageHeader";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout.jsx/Checkout";
import Payment from "./Payment/Payment";
import PaymentSuccess from "./Payment/PaymentSuccess";
import Page_One from "./Things_to_Do/Page_one";
import Description from "./Tour_Description/Description";
import Hotel from '../Components/HotelPage/Hotel'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Description" element={<Description />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Checkout" element={<Checkout />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>
        <Route path="/hotels" element={<Hotel />}></Route>
        <Route path="/PaymentSuccess" element={<PaymentSuccess />}></Route>
        <Route path="/login" element={<Signinnew />}></Route>
        <Route path="/signup" element={<Signupnew />}></Route>
        <Route path="/thingstodo" element={<Page_One />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
