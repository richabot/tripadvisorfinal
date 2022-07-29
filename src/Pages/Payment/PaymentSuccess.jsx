import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div>
      <div
        style={{
          height: "600px",
       
          width: "80%",

          margin: "10%",
      
            boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        }}
      >
        <img
          style={{ height: "300px", width: "600px", marginLeft: "178px" }}
          src="http://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png"
          alt=""
        />

        <Link to="/">
          <button
            style={{
              borderRadius: "18px",
              height: "40px",
              width: "350px",
              marginTop: "0px",
              margin: "35px",
              color: "white",
              backgroundColor: "black",
              border: "none",
              cursor: "pointer",
              marginLeft:"-200px"
            }}
          >
            <b>Done</b>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
