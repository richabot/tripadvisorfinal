import React from "react";
import { Link } from "react-router-dom";
import style from "../Tour_Description/main.module.css";

const Cart = () => {
  let Data1 = JSON.parse(localStorage.getItem("Data"));
  console.log(Data1);

  return (
    <div>
      <div>
        {" "}
        <p
          style={{
            fontWeight: "700",
            fontSize: "35px",
            textAlign: "left",
            marginLeft: "40px",
            marginBottom: "20px",
          }}
        >
          Cart
        </p>
        {/* <p style={{ fontWeight: "700" ,textAlign:"left",marginLeft:"-950px",marginTop:"-80px"}}>See all things to do</p> */}
      </div>
      <div style={{ display: "flex", marginTop: "-80px" }}>
        <div style={{ width: "50%", marginTop: "30px", margin: "40px" }}>
          {Data1.map((item) => {
            return (
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  border: "1px solid black",
                }}
                key={item.id}
              >
                <div style={{ display: "flex" }}>
                  <img
                    style={{ height: "120px", width: "120px", margin: "20px" }}
                    src={item.image}
                    alt="_image"
                  />
                  <div style={{ textAlign: "left" }}>
                    <h3
                      style={{
                        fontWeight: "600",
                        margin: "10px",
                        marginLeft: "4px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <div
                      className={style.circles}
                      style={{
                        fontWeight: "500",
                        margin: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <p style={{ marginTop: "-3px", marginLeft: "-5px" }}>
                        <u style={{ color: "black", fontWeight: "bold" }}>
                          355 reviews
                        </u>
                      </p>
                    </div>
                    <div className={style.cartheart}>
                      <div
                        className={style.heart}
                        style={{ marginTop: "-7px", marginLeft: "5px" }}
                      >
                        <i className="fa fa-gratipay" aria-hidden="true"></i>
                      </div>
                      <p
                        style={{
                          marginTop: "-16px",
                          marginLeft: "3px",
                          marginBottom: "10px",
                        }}
                      >
                        {" "}
                        100% of travelers recommend this experience
                      </p>
                    </div>
                    <p
                      style={{
                        marginTop: "-10px",
                        marginLeft: "5px",
                        fontSize: "13px",
                        marginBottom: "5px",
                      }}
                    >
                      B:Live E-bike Tours - Village - 08:00
                    </p>
                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          marginTop: "-10px",
                          marginLeft: "5px",
                          fontSize: "13px",
                        }}
                      >
                        Sunday, July 24, 2022 | 08:00:00
                      </p>
                      <p
                        style={{
                          marginLeft: "220px",
                          marginTop: "-10px",
                          fontWeight: "700",
                        }}
                      >
                        {" "}
                        Total ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ width: "30%", marginLeft: "100px" }}>
          {Data1.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  padding: "20px",
                  marginTop: "50px",
                  height: "350px",
                  width: "360px",
                  border: "1px solid black",
                  borderRadius: "10px",
                }}
              >
                <h2 style={{ textAlign: "left", fontWeight: "600" }}>
                  Review Order Details
                </h2>
                <div style={{ display: "flex", width: "95%" }}>
                  {" "}
                  <p
                    style={{
                      marginRight: "150px",
                      width: "200px",
                      textAlign: "left",
                      marginLeft: "5px",
                      marginBottom:"5px"
                    }}
                  >
                    Booking Fee
                  </p>{" "}
                  <p>$00.00</p>
                </div>
                <div style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      marginRight: "150px",
                      width: "100px",
                      textAlign: "left",
                      marginLeft: "5px",
                      marginTop: "-10px",
                      marginBottom:"5px"
                    }}
                  >
                    Subtotal
                  </p>{" "}
                  <p style={{ marginTop: "-10px", textAlign: "right" }}>
                    ${item.price}
                  </p>
                </div>
                {/* <hr style={{ marginTop: "-10px" }}></hr> */}
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      marginRight: "150px",
                      width: "100px",
                      textAlign: "left",
                      marginLeft: "5px",
                      marginTop: "-10px",
                      fontWeight: "700",
                    }}
                  >
                    Total
                  </p>{" "}
                  <p
                    style={{
                      marginTop: "-10px",
                      fontWeight: "700",
                      textAlign: "right",
                    }}
                  >
                    ${item.price}
                  </p>
                </div>
                <p
                  style={{
                    marginTop: "10px",
                    textAlign: "left",
                    marginLeft: "10px",
                    fontSize: "13px",
                    marginBottom:"20px"
                  }}
                >
                  No additional taxes & fees
                </p>
                <Link to="/Checkout">
                  <button
                    style={{
                      borderRadius: "18px",
                      height: "40px",
                      width: "250px",
                      // marginLeft: "30px",
                      marginTop: "-5px",
                      backgroundColor: "#f2b203",
                      border: "none",
                      marginBottom:"20px",
                      cursor: "pointer",
                      // marginLeft:"-50px"
                    }}
                  >
                    <b>Checkout</b>
                  </button>
                </Link>

                <p
                  style={{
                    marginLeft: "20px",
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Reserve Now & Pay Later Eligible
                </p>

                <p
                  style={{
                    fontSize: "12px",
                    marginLeft: "20px",
                    textAlign: "left",
                    marginTop: "-5px",
                  }}
                >
                  Unsure of your plans? You can reserve a spot and pay for it
                  later. Just click on "Checkout" to see more payment options.
                  Learn more
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;

// import React from "react";
// import { Link } from "react-router-dom";
// import style from "../Tour_Description/main.module.css";

// const Cart = () => {
//   let Data1 = JSON.parse(localStorage.getItem("Data"));
//   console.log(Data1);

//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ width: "50%", marginTop: "30px", margin: "40px" }}>
//         {Data1.map((item) => {
//           return (
//             <div
//               style={{
//                 marginTop: "20px",
//                 display: "flex",
//                 border: "1px solid black",
//               }}
//               key={item.id}
//             >
//               <div style={{ display: "flex" }}>
//                 <img
//                   style={{ height: "120px", width: "120px", margin: "20px" }}
//                   src={item.image}
//                   alt="_image"
//                 />
//                 <div style={{ textAlign: "left" }}>
//                   <h3 style={{ fontWeight: "500" }}>{item.title}</h3>

//                   <div
//                     className={style.circles}
//                     style={{ fontWeight: "500", marginTop: "-10px" }}
//                   >
//                     <i className="fa fa-circle" aria-hidden="true"></i>
//                     <i className="fa fa-circle" aria-hidden="true"></i>
//                     <i className="fa fa-circle" aria-hidden="true"></i>
//                     <i className="fa fa-circle" aria-hidden="true"></i>
//                     <i className="fa fa-circle" aria-hidden="true"></i>
//                     <p style={{ marginTop: "-3px", marginLeft: "3px" }}>
//                       <u style={{ color: "black", fontWeight: "bold" }}>
//                         355 reviews
//                       </u>
//                     </p>
//                   </div>
//                   <div className={style.cartheart}>
//                     <div
//                       className={style.heart}
//                       style={{ marginTop: "-7px", marginLeft: "5px" }}
//                     >
//                       <i className="fa fa-gratipay" aria-hidden="true"></i>
//                     </div>
//                     <p style={{ marginTop: "-10px", marginLeft: "5px" }}>
//                       {" "}
//                       100% of travelers recommend this experience
//                     </p>
//                   </div>
//                   <p
//                     style={{
//                       marginTop: "-10px",
//                       marginLeft: "5px",
//                       fontSize: "13px",
//                     }}
//                   >
//                     B:Live E-bike Tours - Village - 08:00
//                   </p>
//                   <div style={{ display: "flex" }}>
//                     <p
//                       style={{
//                         marginTop: "-10px",
//                         marginLeft: "5px",
//                         fontSize: "13px",
//                       }}
//                     >
//                       Sunday, July 24, 2022 | 08:00:00
//                     </p>
//                     <p
//                       style={{
//                         marginLeft: "220px",
//                         marginTop: "-10px",
//                         fontWeight: "700",
//                       }}
//                     >
//                       {" "}
//                       Total ${item.price}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div style={{ width: "30%", marginLeft: "100px" }}>
//         {Data1.map((item) => {
//           return (
//             <div
//               key={item.id}
//               style={{
//                 padding: "20px",
//                 marginTop: "50px",
//                 height: "350px",
//                 width: "320px",
//                 border: "1px solid black",
//                 borderRadius: "10px",
//               }}
//             >
//               <h2 style={{ textAlign: "left" }}>Review Order Details</h2>
//               <div style={{ display: "flex" }}>
//                 {" "}
//                 <p
//                   style={{
//                     marginRight: "150px",
//                     width: "100px",
//                     textAlign: "left",
//                     marginLeft: "5px",
//                   }}
//                 >
//                   Booking Fee
//                 </p>{" "}
//                 <p>$00.00</p>
//               </div>
//               <div style={{ display: "flex" }}>
//                 {" "}
//                 <p
//                   style={{
//                     marginRight: "150px",
//                     width: "100px",
//                     textAlign: "left",
//                     marginLeft: "5px",
//                     marginTop: "-10px",
//                   }}
//                 >
//                   Subtotal
//                 </p>{" "}
//                 <p style={{ marginTop: "-10px", textAlign: "right" }}>
//                   ${item.price}
//                 </p>
//               </div>
//               {/* <hr style={{ marginTop: "-10px" }}></hr> */}
//               <div style={{ display: "flex" }}>
//                 <p
//                   style={{
//                     marginRight: "150px",
//                     width: "100px",
//                     textAlign: "left",
//                     marginLeft: "5px",
//                     marginTop: "-10px",
//                     fontWeight: "700",
//                   }}
//                 >
//                   Total
//                 </p>{" "}
//                 <p
//                   style={{
//                     marginTop: "-10px",
//                     fontWeight: "700",
//                     textAlign: "right",
//                   }}
//                 >
//                   ${item.price}
//                 </p>
//               </div>
//               <p
//                 style={{
//                   marginTop: "10px",
//                   textAlign: "left",
//                   marginLeft: "25px",
//                   fontSize: "13px",
//                 }}
//               >
//                 No additional taxes & fees
//               </p>
//               <Link to="/Checkout">
//                 <button
//                   style={{
//                     borderRadius: "18px",
//                     height: "40px",
//                     width: "250px",
//                     // marginLeft: "30px",
//                     marginTop: "-5px",
//                     backgroundColor: "#f2b203",
//                     border: "none",
//                     cursor: "pointer",
//                     // marginLeft:"-50px"
//                   }}
//                 >
//                   <b>Checkout</b>
//                 </button>
//               </Link>

//               <p
//                 style={{
//                   marginLeft: "20px",
//                   fontWeight: "700",
//                   textAlign: "left",
//                 }}
//               >
//                 Reserve Now & Pay Later Eligible
//               </p>

//               <p
//                 style={{
//                   fontSize: "12px",
//                   marginLeft: "20px",
//                   textAlign: "left",
//                   marginTop: "-5px",
//                 }}
//               >
//                 Unsure of your plans? You can reserve a spot and pay for it
//                 later. Just click on "Checkout" to see more payment options.
//                 Learn more
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Cart;
