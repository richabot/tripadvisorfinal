import React from "react";
import './Footer.css';
// eslint-disable-next-line
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// eslint-disable-next-line
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
function Footer() {
    return (
        <>
      <footer>
            <div id="footer-nav-container">
                <div id="left-link-container">
                    <div>
                        <h3>About Trip Advisor</h3>
                        <a href="/">About Us</a>
                        <a href="/">Press</a>
                        <a href="/">Resources and Policies</a>
                        <a href="/">Careers</a>
                        <a href="/">Investor Relations</a>
                        <a href="/">Trust  Safety</a>
                        <a href="/">Contact Us</a>
                    </div>
                    <div>
                        <h3>Explore</h3>

                        <a href="/"> Write a review</a>
                        <a href="/"> Add a Place</a>
                        <a href="/"> Join</a>
                        <a href="/">Travelers' Choice</a>
                        <a href="/">Insurance</a>
                        <a href="/">GreenLeaders</a>
                        <a href="/">Blog</a>
                        <a href="/">Help Center</a>
                        <a href="/">Tripadvisor Plus</a>
                        <a href="/">Travel Articles</a>
                    </div>
                    <div>
                        <div>
                            <h3>Do Business With Us</h3>
                            <a href="/">Owners</a>
                            <a href="/">Business Advantage</a>
                            <a href="/">Sponsored Placements</a>
                            <a href="/">Advertise with Us</a>
                            <a href="/">Access our Content API</a>
                            <a href="/">Become an Affiliate</a>
                        </div>
                        <br/>
                        <div>
                            <h3>Get the App</h3>
                            <a href="/">iPhone App</a>
                            <a href="/">Android App</a>
                        </div>
                    </div>
                </div>
                <div id="right-link-container">
                    <h3>Tripadvisor Sites</h3>
                    <p>Discover your dream destination with <a href="/">Jetsetter</a></p>
                    <p>Book the best restaurants with <a href="/">TheFork</a></p>
                    <p>Book tours and attraction tickets on <a href="/">Viator</a></p>
                    <p>Read cruise reviews on <a href="/">Cruise Critic</a></p>
                    <p>Get airline seating charts on <a href="/">Seat Guru</a></p>
                    <p>Find vacation rentals on <a href="/">FlipKey</a></p>
                    <p>Search for holiday rentals on <a href="/">Holiday Lettings</a></p>
                    <p>Find a vacation home on  <a href="/"> Vacation Home Rentals</a></p>
                    <p>Plan and book your next trip with <a href="/">Reco Trip Designers</a></p>

                    <form action="/">
                        <select name="/" id="/">
                            <option value="/">$USD</option>
                        </select>
                        <select name="/" id="/">
                            <option value="/">United States</option>
                        </select>
                    </form>

                    <div className="socialmedia">
                    

 
{/* <FontAwesomeIcon icon={"hello"}></FontAwesomeIcon>
<FontAwesomeIcon icon={"hello"}></FontAwesomeIcon> */}
                    </div>
                </div>
            </div>
            <div>

            </div>
        </footer>

        </>
    )
}

export default Footer;