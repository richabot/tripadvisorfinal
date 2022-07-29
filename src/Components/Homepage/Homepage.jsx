import React, {useState, useEffect} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
////import {Carousel} from 'react-responsive-carousel'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faPencil,faHeart,faBell,faBed,faKey,faList,faSpoon,faMessage,faCircleDot} from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-grid-carousel'
import {list,list3} from './data'
import {list2}from './data1'
import Footer from '../Footer/Footer.jsx';
import './Slider.css'
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'
const Homepage = () => {
const navigate =useNavigate()
const navigatetosign=()=>{
navigate("/signup")
}
const [InputText, setInputText] = useState("");
const handlechange=(e)=>{
setInputText(e.target.value)
}
    const directhotel=(e)=>{
    setInputText(e.target.value)

    console.log(InputText)
        


}

let [over,setOver]=useState(false);
const el = document.getElementById("contain")
const searchbar1=document.getElementById("seachbar1")
console.log(searchbar1)
console.log(el)
useEffect(() => {
    console.log(over)
if(over)
{
        el.style.opacity=0.7;
        
       
}

  }, [over,setOver]);


   

     
  return (
   <div id="contain"  style={{ opacity:!over ?  "":"1"}}>
   
     <div className='main'>
     <div id="navbar">
        
        <div id="top-nav-container">
            
            <div className="logo">
                <img className="logo-img" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="trip advisor logo: owl eyes and beak" />
                
            </div>

            <ul className="nav-link-container">
                <li className="top-nav-link">
                  
                </li>
                <li className="top-nav-link">
                    <a href="/">
                        <span>

 
 <FontAwesomeIcon icon={faPencil} /></span>
                        <span className="space">Review</span>
                    </a>
                </li>
                <li className="top-nav-link">
                    <a href="/">
                        <span>
                        <FontAwesomeIcon className="heart" icon={farHeart} />
                        </span>
                        <span className="space">Trips</span>
                    </a>
                </li>
                <li class="top-nav-link">
                    <a href='/'>
                        <span >
                        <span > <FontAwesomeIcon icon={faBell} /></span>
                        <span className="space">Alerts</span>
                        </span>
                      
                    </a>
                </li>
                <li class="top-nav-link" className="sign ">
                    <button href="" class="text-white " onClick={navigatetosign}>
                        Sign In
                    
                    </button>
                </li>
            </ul>
        </div>
        </div>
        <div id="bottom-nav-container">
            <ul class="nav-link-container">
                <li class="bottom-nav-link">
                    <Link to="/hotels">
                        <span className='up'>Hotels</span>
                        <span> <FontAwesomeIcon icon={faBed} /></span>
                    </Link>
                </li>
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>Vacation Rentals</span>
                        <span> <FontAwesomeIcon icon={faKey} /></span>
                    </a>
                </li>
                <li class="bottom-nav-link">
                   <Link to="/thingstodo">
                   <span className='up'>Things to Do</span>
                        <span> <FontAwesomeIcon icon={faList} /></span>
                   </Link>
                     
                    
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

        </div>
  
        <div className="header">
   
        <input id="seachbar1"type="text" className="search-bar clickme" placeholder="Where to?" value={InputText} 
        onKeyDown={directhotel}
        onChange={handlechange}
       onMouseEnter={()=>setOver(true)}
       onMouseLeave={()=>setOver(false)}
     
    //    {...over && style={{opacity: 1}}}
  

        />
  
</div>
<div id="tripadvisor-ukraine-ad" className="two-column-ad-container bg-beige">
            <img className="ad-img" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/d1/b8/69/caption.jpg?w=1200&h=-1&s=1&cx=707&cy=658&chk=v1_cf0d131fe02c5b35d48c" alt="Man at world center booth holding plate of food"/>
            <div id="tripadvisor-ukraine-ad-caption" className="ad-caption">
                <div className="ad-logo">
                    <img className="logo-img1" src="data:image/webp;base64,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" alt="trip advisor logo: owl eyes and beak"/>
                    <h3>Tripadvisor Foundation</h3>
                </div>
                <h1 class="support">Support Ukrainian Relief Efforts</h1>
                <p>World Central Kitchen and their hundreds of restaurant partners continue to feed families impacted by the crisis in Ukraine. Join us as we support these ongoing efforts serving millions of meals in the region.</p>
                <a href="/" id="tripadvisor-ukraine-ad-button" className="ad-button text-white bg-black extra btn1">Join Us</a>
            </div>
        </div>
    {/* slider */}
    <div className="fourth_box">
 
    <p className='leftrec'>   Top experiences on Tripadvisor</p>
    {/* <p className='left'>More things to do in Hyderabad</p> */}

    <h2 className='left1'> </h2>
   <div className="boxbest">
   <Carousel cols={4} rows={1} gap={5} loop
    >
{list.map((item) => {
 return(

    
<Carousel.Item>
    {/* <div className="flexit" key={item.id}>
   <div className='container'>
   <img className="imagefix" src={item.img} alt="abc" />
   <p className="top-left">🤍</p>
     
   </div>
  
      <h3>{item.title}</h3>
      <p className="ptagfix"> {item.price}</p>
      <div className="carrousel-reviews">
         
              <p>{item.amount}</p>
            </div>
    </div> */}
     <section  className="flexit"  key={item.id} class="carousel">
        <div class="card">
          <div className='container'>
            <img className="imagefix" src={item.img} alt="" />
            <div className="like-logo ">
           {/* <span className='heart'> 🤍</span> */}
              {/* <i class="fa-regular fa-heart"></i> */}
              <FontAwesomeIcon  className="heart"icon={faHeart} />
              <i class="fa fa-heart" aria-hidden="true"></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
              {/* <FontAwesomeIcon icon={faHeart}/> */}
              {/* <FontAwesomeIcon  icon="fa-thin fa-heart" /> */}
              {/* <FontAwesomeIcon  class="fa">&#xf08a;</FontAwesomeIcon> */}
            </div>
    
            
          </div>
          <a href="/">{item.title}</a>
         
          <div class="ranking">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p className='pricetag'>{item.price}</p>
          </div>
         
          <div className="carrousel-reviews">
         
       
       </div>
        </div>
        </section>
  </Carousel.Item>


      )
}
)}
{/* ... */}
</Carousel>
   </div>
</div>
{/* slide end */}
<div className="fourth_box">
    <h2 className='left1'>Based on your recent activity </h2>
   
   <div className="boxbest">
   <Carousel cols={4} rows={1} gap={5} loop
    >
{list3.map((item) => {
 return(
  <Carousel.Item>
     <section  className="flexit"  key={item.id} class="carousel">
        <div class="card">
          <div className='container'>
            <img className="imagefix" src={item.img} alt="" />
            <div className="like-logo ">
           {/* <span className='heart'> 🤍</span> */}
              {/* <i class="fa-regular fa-heart"></i> */}
              <FontAwesomeIcon  className="heart"icon={faHeart} />
              <i class="fa fa-heart" aria-hidden="true"></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
              {/* <FontAwesomeIcon icon={faHeart}/> */}
              {/* <FontAwesomeIcon  icon="fa-thin fa-heart" /> */}
              {/* <FontAwesomeIcon  class="fa">&#xf08a;</FontAwesomeIcon> */}
            </div>
    
            
          </div>
          <a href="/">{item.title}</a>
         
          <div class="ranking">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p className='pricetag'>{item.price}</p>
          </div>
        <p>{item.amount}</p>
        </div>
        </section>
  </Carousel.Item>
      )
}
)}
{/* ... */}
</Carousel>
   </div>
</div>



<div className='pink'>
    <div>
        <h2 className='pinkh2'>Get out here</h2>
        <p className='pinkp1'>Best of best tours ,attraction and activites you dont want to miss</p>
        <button className='pinkbtn'>See the list</button>
    </div>
    <img  className="pinkimg" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1" alt="" />
</div>
<div className="fourth_box">
    
    <p className='leftrec'>Recommended based on your activity</p>
   <div className="boxbest">
   <Carousel cols={4} rows={1} gap={5} loop
    >
{list2.map((item) => {
 return(
  <Carousel.Item>
    <div className="flexit" key={item.id}>
  
  <div className='container'>
  <img className="imagefix" src={item.img} alt="abc" />
  
     

  
  <h3 className='bottom-right'>{item.title}</h3>
  </div>
      
    </div>
  </Carousel.Item>
      )
}
)}
{/* ... */}
</Carousel>
   </div>
</div>


    </div>
<div className='lastpart'>
<div className='container'>
<img  className="last" src="https://static.tacdn.com/img2/cpm/home_page_shelf_backfills/Booking_300x600.jpg" alt="" />
<div className='boxsize centered'>
<p className='centered'>Where can we rent bicycles and ride on flat surfaces</p>
</div>
</div>
</div>
<br />
<br />
<br />
<div className='green'>
<div className='green1'>
    <div> 
         <img className='owl' src="https://static.tacdn.com/img2/travelers_choice/TC_logomark_solid_cream.svg" alt="" />

       <div className='box'>  <h1 class="travel">Travellers' Choice Best of the Best</h1></div>

    </div>
    <div>
         <img className='owlside' src="https://static.tacdn.com/img2/brand/feed/tc_cards_desktop.jpeg" alt="" />
    </div>
</div>
</div>
<Footer/>
   </div>


////slider 2
  )
 
}


export default Homepage