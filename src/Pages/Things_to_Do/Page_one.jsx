import React from 'react'
import Review from './Review'
import styles from './Page_one.module.css'
import TopAttraction from './Top_Attraction'
import { useNavigate } from 'react-router-dom'
import SubPageHeader from '../../Components/SubPageHeader/SubPageHeader'
import SubPagesFooter from '../../Components/SubPagesFooter/SubPageFooter'

const Page_One = () => {
    const navigate=useNavigate()
    const navigatetodis=()=>{
navigate("/Description")
    }
    const data = [{ "id": 1, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/75/46/5e/caption.jpg?w=300&h=300&s=1","category":'E-Bike Tours',"price":"from ₹2,620.44 per adult","title":"BLive Electric Bike Tours – Discovery of Divar Island" },
        { "id": 2, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/79/66/7f/caption.jpg?w=300&h=300&s=1","category":'E-Bike Tours',"price":"from ₹2,440.29 per adult","title":"BLive Electric Bike Tours – Countryside Escape to Varca" },
        { "id": 3, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/75/46/4a/caption.jpg?w=300&h=300&s=1","category":'E-Bike Tours',"price":"from ₹2,440.29 per adult","title":"BLive Electric Bike Tours – Captivating Cavelossim" },
        { "id": 4, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/75/45/cb/caption.jpg?w=300&h=300&s=1" ,"category":'E-Bike Tours',"price":"from ₹1,555.89 per adult","title":"BLive Electric Bike Tours - Vibrant Tales of Panjim"}
    ]

    const data1 = [{ "id": 1, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f1/42/c3/caption.jpg?w=300&h=300&s=1","category":'Private and Luxury',"price":"from ₹900.00 per adult","title":"Fontainhas Heritage Walk by Make It Happen" },
        { "id": 2, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/91/4f/d1/caption.jpg?w=300&h=300&s=1","category":'Full-day Tours',"price":"from ₹2,800.00 per adult","title":"Full-Day Tour Old Goa Dudhsagar Falls and Spice Plantation" },
        { "id": 3, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/20/f6/88/b4/caption.jpg?w=300&h=300&s=1","category":'Diving',"price":"from ₹3,000.00 per adult","title":"Scuba Diving Grand Island, Parasailling, Jet- Ski +3 Water Sports" },
        { "id": 4, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/9a/92/c9/caption.jpg?w=300&h=300&s=1", "category": 'Bus Tours', "price": "from ₹12,835.14 per adult (price varies by group size)", "title": "Day trip from Goa to Anshi National Park (Kali Tiger Reserve, Dandeli)" },
    ]

    const cities = [{ "id": 1, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/01/20/15/ashwem-beach.jpg?w=300&h=300&s=1","category":'Goa, India',"title":"Panjim" },
    { "id": 2, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/86/fa/b8/vagator-beach.jpg?w=300&h=300&s=1","category":'Goa, India',"title":"Bardez" },
    { "id": 3, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/9b/2f/5e/calangute.jpg?w=300&h=300&s=1","category":'Goa, India',"title":"Calangute" },
    { "id": 4, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/f6/1d/7c/been-there-during-monsoon.jpg?w=300&h=300&s=1","category":'Goa, India',"title":"Canacona" },
    ]

    const culture = [{ "id": 1, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/3f/9e/ca/caption.jpg?w=300&h=300&s=1","category":'Bus Tours',"price":"from ₹2,043.81 per adult (price varies by group size)","title":"The Island of Chorao" },
        { "id": 2, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/46/ff/1e/caption.jpg?w=300&h=300&s=1","category":'Bus Tours',"price":"from ₹1,594.17 per adult (price varies by group size)","title":"Houses of Goa- Chandor" },
        { "id": 3, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/98/07/61/caption.jpg?w=300&h=300&s=1","category":'Full-day Tours',"price":"from ₹3,240.00 per adult (price varies by group size)","title":"Full-Day Private South Goa Sightseeing Tour with Port Pickup" },
        { "id": 4, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/58/f5/8b/caption.jpg?w=300&h=300&s=1" ,"category":'Full-day Tours',"price":"from ₹4,905.15 per group (up to 4)","title":"Great Value North Goa Tour"}
    ]
    

    const plantation = [{ "id": 1, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/91/50/d0/caption.jpg?w=300&h=300&s=1","category":'Full-day Tours',"price":"from ₹4,860.00 per adult (price varies by group size)","title":"Private Tour to Goa and Dudhsagar Waterfalls with Lunch" },
        { "id": 2, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/98/0a/14/caption.jpg?w=300&h=300&s=1","category":'Bus Tours',"price":"from ₹3,960.00 per adult (price varies by group size)","title":"Private Tour of Butterfly Sanctuary and Spice Plantation" },
        { "id": 3, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/82/a9/4d/caption.jpg?w=300&h=300&s=1","category":'Full-day Tours',"price":"from ₹4,860.00 per adult (price varies by group size)","title":"Private Dudhsagar waterfalls & Spice Plantation with Lunch from Mormugao Port" },
        { "id": 4, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/58/f5/8b/caption.jpg?w=300&h=300&s=1" ,"category":'Full-day Tours',"price":"from ₹4,905.15 per group (up to 4)","title":"Great Value North Goa Tour"}
    ]

  return (
      <>
      <SubPageHeader/>
          <div style={{width:'1050px',margin:"auto"}}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p
					style={{
						fontSize: "42px",
						fontWeight: "700",
						lineHeight: "50px",
						marginTop: "50px",
						color: "black",
					}}
				>
					Places to Visit in Goa
				</p>
                  {/* <img width="600px" height="4px" src={require('./images/map2.png')} alt="" /> */}
                  {/* <button className={styles.btn}>Map</button> */}
                
                    <button href="" class="text-white " style={{marginTop:'50px'}}>
                        Map
                    </button>
                
              </div>   
              <br />
              <br />
              <div>
                  <p style={{ fontSize: '24px', textAlign: 'left', fontWeight: '700' }}>Popuar Cities In Goa</p>
                  <br />
                  <div className={styles.bike}>
                      {cities.map((item) => (
                          <div key={item.id} >
                              <img height="200px" width="250px" src={item.imgUrl} alt="" />
                              <p style={{ fontSize: "20px" }}>{item.title}</p>
                              <p style={{fontSize:"14px"}}>{item.category}</p>
                          </div>
                      ))}
                  </div>
              </div>
              <br />
              <br />

              {/* Ways to your Goa */}
              <div>
                  <p style={{ fontSize: '24px', textAlign: 'left', fontWeight: '700' }}>Ways to your Goa</p>
                  <p style={{ fontSize: '16px', textAlign: 'left', fontWeight: '400' }}>Book these experiences for a close-up look at Goa.</p>

                  <br />
                  <div className={styles.bike}>
                      {data1.map((item) => (
                          <div key={item.id} >
                              <img height="200px" width="250px" src={item.imgUrl} alt="" />
                              <p style={{ fontSize: "14px" }}>{item.title}</p>
                              <img width="100%" src={require('./images/dots.png')} alt="" />
                              <p style={{fontSize:"10px"}}>{item.category}</p>
                              <p style={{fontSize:"12px"}}>{item.price}</p>
                          </div>
                      ))}
                  </div>
              </div>
              <br />
              <br />
                        {/* Mountain Bikes */}
              <div>
                  <p style={{ fontSize: '24px', textAlign: 'left', fontWeight: '700' }}>Mountain Bikes</p>
                  <br />
                  <div className={styles.bike}>
                      {data.map((item) => (
                          <div key={item.id}  onClick={navigatetodis}>
                              <img height="200px" width="250px" src={item.imgUrl} alt="" />
                              <p style={{ fontSize: "14px" }}>{item.title}</p>
                              <img width="100%" src={require('./images/dots.png')} alt="" />
                              <p style={{fontSize:"10px"}}>{item.category}</p>
                              <p style={{fontSize:"12px"}}>{item.price}</p>
                          </div>
                      ))}
                  </div>
              </div>
              <br />
              <br />

              {/* Top Attraction */}
              <TopAttraction />
              <br />
              <br />

              {/* Culture */}
              <div>
                  <p style={{ fontSize: '24px', textAlign: 'left', fontWeight: '700' }}>Cultural Tours</p>
                  <br />
                  <div className={styles.bike}>
                      {culture.map((item) => (
                          <div key={item.id} >
                              <img height="200px" width="250px" src={item.imgUrl} alt="" />
                              <p style={{ fontSize: "14px" }}>{item.title}</p>
                              <img width="100%" src={require('./images/dots.png')} alt="" />
                              <p style={{fontSize:"10px"}}>{item.category}</p>
                              <p style={{fontSize:"12px"}}>{item.price}</p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Plantation */}
              <div>
                  <p style={{ fontSize: '24px', textAlign: 'left', fontWeight: '700' }}>Plantation Tours</p>
                  <br />
                  <div className={styles.bike}>
                      {plantation.map((item) => (
                          <div key={item.id} >
                              <img height="200px" width="250px" src={item.imgUrl} alt="" />
                              <p style={{ fontSize: "14px" }}>{item.title}</p>
                              <img width="100%" src={require('./images/dots.png')} alt="" />
                              <p style={{fontSize:"10px"}}>{item.category}</p>
                              <p style={{fontSize:"12px"}}>{item.price}</p>
                          </div>
                      ))}
                  </div>
              </div>

              <br />
              <br />
              
              {/* Review Page */}
              <p style={{fontSize:'24px',textAlign:'left',fontWeight:'700',marginLeft:"78px"}}>What travellers are saying</p>
              <div>
                  <div>
                    <br />
                    <Review/>
                  </div>
              </div>
          </div>
        
          <SubPagesFooter/>
          
    </>
  )
}

export default Page_One