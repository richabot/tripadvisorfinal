import React from "react";
import style from "./main.module.css";
import img1 from "./Images/img1.svg";
import img2 from "./Images/img2.svg";
import img3 from "./Images/img3.svg";
import img4 from "./Images/img4.svg";
import img5 from "./Images/img5.svg";
import img6 from "./Images/img6.svg";
import img7 from "./Images/img7.svg";
import bnner1 from "./Images/bnner1.jpg";
import bnner2 from "./Images/bnner2.jpg";
import bottom from "./Images/bottom.jpg";
import data1 from "./data1.json";

import { Link } from "react-router-dom";

const Description = () => {
  const Data = data1.data1;
  console.log(Data);

  const AddToCart = () => {
    localStorage.setItem("Data", JSON.stringify(Data));
  };

  return (
    <>
      <div className={style.main} style={{ paddingTop: "30px" }}>
        <p style={{ textAlign: "left", fontSize: "14px" }}>
          Asia {">"} India {">"} Goa {">"} South Goa District {">"} Salcette{" "}
          {">"} Varca {">"} Things to Do in Varca {">"} Varca Tours {">"} Tours
          and Tickets
        </p>
        <div className={style.topdiv}>
          <div className={style.imgdiv} style={{ marginTop: "30px" }}>
            <div>
              <img
                style={{ height: "500px", width: "580px" }}
                src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/01/a1/13.jpg"
                alt=""
              />
              {/* 
            <ChakraProvider>
              <Carousel />
            </ChakraProvider> */}
            </div>
          </div>
          <div
            className={style.titlediv}
            style={{ paddingTop: "40px", paddingLeft: "10px" }}
          >
            <div className={style.title}>
              <h1
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                  lineHeight: "26px",
                  paddingBottom: "10px",
                  paddingTop: "13px",
                }}
                id="title"
              >
                BLive Electric Bike Tours – Countryside Escape to Varca
              </h1>
            </div>
            <b>
              <u>By BLive Electric Bike Tours</u>
            </b>
            <div className={style.secdiv}>
              <div className={style.circles}>
                <i className="fa fa-circle" aria-hidden="true"></i>
                <i className="fa fa-circle" aria-hidden="true"></i>
                <i className="fa fa-circle" aria-hidden="true"></i>
                <i className="fa fa-circle" aria-hidden="true"></i>
                <i className="fa fa-circle" aria-hidden="true"></i>
                <p style={{ marginTop: "-3px", marginLeft: "3px" }}>
                  <u style={{ color: "black", fontWeight: "bold" }}>
                    355 reviews
                  </u>
                </p>
              </div>

              <div className={style.heart}>
                <i className="fa fa-gratipay" aria-hidden="true"></i>
              </div>
              <p style={{ marginTop: "-3px", marginLeft: "5px" }}>
                {" "}
                Recommended by 100% of travelers
              </p>
            </div>
            <p style={{ marginTop: "5px", marginLeft: "3px" }}>
              Exquisite views of the South Goan countryside.
            </p>
            <p style={{ marginTop: "5px", marginLeft: "3px" }}>
              Witness the beautiful paddy fields.
            </p>

            <p>from</p>
            <div className={style.costdiv}>
              <div className={style.cost}>
                <h1
                  style={{
                    marginTop: "-5px",
                    marginLeft: "3px",
                    fontSize: "40px",
                  }}
                >
                  $29.80
                </h1>
              </div>
              <div className={style.button}>
                <Link to="/Cart">
                  <button
                    onClick={AddToCart}
                    style={{
                      borderRadius: "18px",
                      height: "40px",
                      width: "100px",
                      marginTop: "-5px",
                      backgroundColor: "#f2b203",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <b>Add to Cart</b>
                  </button>
                </Link>

                <Link to="/Checkout">
                  <button
                    style={{
                      borderRadius: "18px",
                      height: "40px",
                      width: "100px",
                      marginLeft: "30px",
                      marginTop: "-5px",
                      backgroundColor: "#f2b203",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <b>Reserve</b>
                  </button>
                </Link>
              </div>
            </div>
            <p style={{ marginTop: "20px", marginLeft: "3px" }}>per adult</p>

            <hr style={{ width: "80%", marginLeft: "0px", color: "#e0e0e0" }} />
            <div className={style.mainitem}>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <img
                  src={img1}
                  style={{ height: "17px", width: "17px", marginTop: "4px" }}
                  alt=""
                />
                <p
                  style={{
                    // marginLeft: "5px",
                    // marginTop: "-5px",
                    marginLeft: "5px",
                  }}
                >
                  {" "}
                  Lowest price guarantee
                </p>
              </div>
            </div>

            <div className={style.mainitem}>
              <div style={{ display: "flex", marginTop: "-34px" }}>
                {" "}
                <img
                  src={img2}
                  style={{ height: "17px", width: "17px", marginTop: "4px" }}
                  alt=""
                />
                <p style={{ marginLeft: "5px", marginTop: "-1px" }}>
                  Free cancellation
                </p>
              </div>
            </div>

            <div className={style.mainitem}>
              <div style={{ display: "flex", marginTop: "-34px" }}>
                <img
                  style={{
                    height: "17px",
                    width: "17px",
                    marginTop: "4px",
                    marginRight: "5px",
                  }}
                  src={img3}
                  alt=""
                />
                <p className={{ marginLeft: "15px", marginTop: "-5px" }}>
                  Reserve now & pay later
                </p>
              </div>
              <div className={style.item2}></div>
            </div>

            <div className={style.mainitem}>
              <div style={{ display: "flex", marginTop: "-34px" }}>
                <img
                  src={img4}
                  style={{
                    height: "17px",
                    width: "17px",
                    marginTop: "4px",
                    marginRight: "5px",
                  }}
                  alt=""
                />
                <p className={{ marginLeft: "5px", marginTop: "-5px" }}>
                  Ages 12-70, max of 10 per group
                </p>
              </div>
              <div className={style.item2}></div>
            </div>

            <div className={style.mainitem}>
              <div style={{ display: "flex", marginTop: "-34px" }}>
                <img
                  src={img5}
                  style={{ height: "17px", width: "17px", marginTop: "-2px" }}
                  alt=""
                />
                <p style={{ marginLeft: "5px", marginTop: "-5px" }}>
                  Duration:2h 30m
                </p>
              </div>
              <div className={style.item2}></div>
            </div>
            <div className={style.mainitem}>
              <div style={{ display: "flex", marginTop: "-34px" }}>
                <img
                  src={img6}
                  style={{ height: "17px", width: "17px", marginTop: "4px" }}
                  alt=""
                />
                <p
                  className={{
                    marginLeft: "6px",
                    marginTop: "-25px",
                    marginRight: "5px",
                  }}
                >
                  {" "}
                  Ticket type:Mobile
                </p>
              </div>
              {/* <div className={style.item2}>
                <span >
                  Ticket type:Mobile
                </span>
              </div> */}
            </div>
            <div className={style.mainitem}>
              <div style={{ display: "flex", marginTop: "-34px" }}>
                <img
                  src={img7}
                  style={{
                    height: "17px",
                    width: "17px",
                    marginTop: "4px",
                    marginRight: "5px",
                  }}
                  alt=""
                />
                <p className={{ marginLeft: "8px", marginTop: "-5px" }}>
                  English
                </p>
              </div>
              <div className={style.item2}></div>
            </div>

            <br />
          </div>
        </div>
        <h2
          style={{
            textAlign: "left",
            fontSize: "26px",
            fontWeight: "700",
            marginLeft: "15px",
          }}
        >
          About
        </h2>
        <div className={style.about}>
          <div className={style.abt1}>
            <h4
              style={{
                textAlign: "left",
                fontSize: "17px",
                fontWeight: "700",
                marginLeft: "15px",
              }}
            >
              Know before you go
            </h4>
            <p style={{ textAlign: "left", marginLeft: "15px" }}>
              Duration: 2h 30m <br /> Mobile tickets accepted <br /> Instant
              confirmation
            </p>
          </div>
          <div className={style.abt2}>
            <h4
              style={{
                textAlign: "left",
                fontSize: "17px",
                fontWeight: "700",
              }}
            >
              Cancellation policy
            </h4>
            <p>
              For a full refund, cancel at least 24 hours in <br /> advance of
              the start date of the experience.
            </p>
          </div>
          <div className={style.abt3}>
            <h4
              style={{
                textAlign: "left",
                fontSize: "17px",
                fontWeight: "700",
              }}
            >
              Available languages
            </h4>
            <p style={{ textAlign: "left", marginLeft: "0px" }}>English</p>
          </div>
        </div>
        <div style={{ textAlign: "left", marginLeft: "15px" }}>
          <h3
            style={{
              textAlign: "left",
              fontSize: "17px",
              fontWeight: "700",
            }}
          >
            What to expect{" "}
          </h3>
          <h4>Itinerary </h4>
          <p>This is a typical itinerary for this product</p>

          <p>Stop At: Benaulim, Goa, India</p>
          <p>
            We leave the beautiful Club Mahindra Emerald Palms to ride through
            the peaceful countryside.
          </p>
          <p>
            Riding through the paddy fields, we learn about areca nut/betel nut
            plantation.
          </p>
          <p>
            Glide on to celebrate Goa’s rich Catholic influences in a
            450-year-old church, one of the oldest in Goa.
          </p>
          <p>
            We then ride to Orlim bridge and we learn about fishing activities.
          </p>
          <p>Duration: 3 hours</p>

          <button
            style={{
              borderRadius: "22px",
              height: "50px",
              width: "250px",
              // marginLeft: "30px",
              margin: "10px",
              backgroundColor: "white",
              //   border: "none",
              cursor: "pointer",
              border: "1px solid black",
            }}
          >
            <p style={{ fontSize: "18px" }}>View more information</p>
          </button>

          <h4
            style={{
              textAlign: "left",
              fontSize: "26px",
              fontWeight: "600",
              // marginLeft: "15px",
            }}
          >
            Important information
          </h4>

          <b>Inclusions</b>
          <li>
            E-Bike, Trained Captain,Guided Tour,Snacks, Refreshments,Safety
            Gears,Sling Bag & First Aid Support.
          </li>
          <li>Entry/Admission - Benaulim</li>

          <br />
          <br />

          <b>Inclusions</b>
          <br />
          <li>
            Alcoholic beverage, 2-wheeler and LMV Rentals,Tips, Hotel pick up or
            drop off.
          </li>

          <br />
          <br />
          <b>Additional information</b>

          <li>Confirmation will be received at time of booking</li>
          <li>Not wheelchair accessible</li>
          <li>Most travelers can participate</li>
          <li>This tour/activity will have a maximum of 10 travelers</li>

          <button
            style={{
              borderRadius: "22px",
              height: "50px",
              width: "250px",
              // marginLeft: "30px",
              border: "1px solid",
              marginTop: "25px",
              backgroundColor: "white",
              //   border: "none",
              cursor: "pointer",
              margin: "10px",
            }}
          >
            <p style={{ fontSize: "18px" }}>View details</p>
          </button>

          <br />
          <br />
          <br />
          <br />

          <img style={{ height: "160px", width: "94%" }} src={bnner2} alt="" />

          <br />
          <br />

          <h4
            style={{
              textAlign: "left",
              fontSize: "26px",
              fontWeight: "600",
              // marginLeft: "15px",
            }}
          >
            Travel safe during COVID-19
          </h4>
          <p>Last updated: Dec 2, 2020</p>
          <h4
            style={{
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "20px",
              // marginLeft: "15px",
            }}
          >
            A note from BLive Electric Bike Tours – Countryside Escape to Varca
          </h4>

          <p>
            Welcome to BLive - India’s safest EV tourism brand. The experience
            on our Ebikes follows default social <br /> distancing. Here’s what
            you need to know: Introducing private tours. Safety kits, sanitizers
            and masks <br /> provided. Well sanitized Ebikes and accessories.
            Regular temperature and health checks.
          </p>

          <h4
            style={{
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "20px",
              // marginLeft: "15px",
            }}
          >
            What you can expect during your visit
          </h4>

          <li>Regular temperature checks for staff</li>
          <li>Regularly sanitized high-traffic areas</li>
          <li>Temperature checks for tour participants upon arrival</li>

          <button
            style={{
              borderRadius: "22px",
              height: "50px",
              width: "250px",
              // marginLeft: "30px",
              marginTop: "25px",
              backgroundColor: "white",
              //   border: "none",
              cursor: "pointer",
              border: "1px solid",
              margin: "10px",
            }}
          >
            <p style={{ fontSize: "18px" }}>View all safety measures</p>
          </button>
        </div>
        <div>
          {/* <ChakraProvider>
            <FAQs />
          </ChakraProvider> */}
        </div>
        <br />
        <br />
        <img style={{ width: "93%", marginLeft: "40px" }} src={bnner1} alt="" />

        <img
          style={{
            width: "95%",
            marginTop: "60px",
            marginLeft: "40px",
            height: "400px",
          }}
          src={bottom}
          alt=""
        />
      </div>
    </>
  );
};

export default Description;
