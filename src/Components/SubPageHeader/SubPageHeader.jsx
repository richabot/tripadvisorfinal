import React from 'react'
import "./SubPageHeader.css"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import {Carousel} from 'react-responsive-carousel'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPencil,faHeart,faBell } from '@fortawesome/free-solid-svg-icons'
//import Carousel from 'react-grid-carousel'
// import list from './data'
import "../Homepage/Slider.css"
//import list2 from './data1'
const  SubPageHeader = () => {
  return (
    <div className='main'>
   

        <div id="navbar">
        <div id="top-nav-container">
            <div class="logo">
                <img class="logo-img" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="trip advisor logo: owl eyes and beak" />
                <input type="text" className='search-1' />
            </div>

            <ul class="nav-link-container">
                <li class="top-nav-link">
                  
                </li>
                <li class="top-nav-link">
                    <a href="/">
                        <span>

 
 <FontAwesomeIcon icon={faPencil} /></span>
                        <span>Review</span>
                    </a>
                </li>
                <li class="top-nav-link">
                    <a href="/">
                        <span>
                        <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span>Trips</span>
                    </a>
                </li>
                <li class="top-nav-link">
                    <a href='/'>
                        <span> <FontAwesomeIcon icon={faBell} /></span>
                        <span>Alerts</span>
                    </a>
                </li>
                <li class="top-nav-link" className="sign">
                    <button href="" class="btn11">
                        Sign In
                    </button>
                </li>
            </ul>
        </div>
        {/* <div id="bottom-nav-container">
            <ul class="nav-link-container">
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>Hotels</span>
                        <span> <FontAwesomeIcon icon={faBed} /></span>
                    </a>
                </li>
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>Vacation Rentals</span>
                        <span> <FontAwesomeIcon icon={faKey} /></span>
                    </a>
                </li>
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>Things to Do</span>
                        <span> <FontAwesomeIcon icon={faList} /></span>
                    </a>
                </li>
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>Restaurants</span>
                        <span> <FontAwesomeIcon icon={faSpoon} /></span>
                    </a>
                </li>
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>Travel Forums</span>
                        <span> <FontAwesomeIcon icon={faMessage} /></span>
                    </a>
                </li>
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>More</span>
                        <span> <FontAwesomeIcon icon={faCircleDot} /></span>
                    </a>
                </li>
            </ul>
        </div> */}


<div className='lowrBox'>
{/* filtr */}
<div className='hoverBox'>
    {/* <h3>MAKEUP</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">Goa 
</button>
<div class="dropdown-content">
<a href="###">Hotels</a>
<a href="###">Restuarant</a>
<a href="###">eye</a>
</div> </div> </div> 
    {/* <h3>BRUSHES</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">Hotels 
</button>
<div class="dropdown-content">
<a href="###">place</a>
<a href="###">sort</a>
</div> </div> </div>
    {/* <h3>SKINCARE</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">Places to Visit</button>
<div class="dropdown-content">
<a href="###"> tourist</a>
<a href="###">SUNS </a>
<a href="###">SETTING</a>
<a href="###">COFFEE RANGE</a>
<a href="###"> COMBO</a>
<a href="###">RANGE</a>
<a href="###">AQUAHOLIC RANGE</a>
<a href="###">meets</a>
</div> </div> </div>
    {/* <h3>TRENDING</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">Restuarant
</button>
<div class="dropdown-content">
<a href="###"> STATION</a>
<a href="###"> KITS</a>
<a href="###">BESTSELLERS</a>
<a href="###">SETS</a>
<a href="###">VELUE SETS</a>
</div> </div> </div>
    {/* <h3>BLOG</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">Flights 
</button>
<div class="dropdown-content">
<a href="###">FEATURED</a>
<a href="###">MUP</a>
<a href="###">CARE</a>
</div> </div> </div>
    {/* <h3>OFFERS</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
                              {/* orignal link usewd */}
<button class="dropbtn"><a href="/"> Holiday Home</a>    
</button>
</div> </div>
    {/* <h3>STORES</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
                                 {/* orignal link usewd */}
<button class="dropbtn"><a href="/"> Shopping </a>    
</button>
</div> </div>
</div>
        </div>
 
    </div>
   


    </div>
   
  



  )
}

export default SubPageHeader