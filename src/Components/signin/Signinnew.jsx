import React from 'react'
import "./signin.css"
import { useState,useReducer } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const reducer=(state=initState,{type,payload})=>{
    switch(type){
     
      case "username":{
        return {...state,username:payload}
      }
      case "password":{
        return {...state,password:payload}
      }
    
    
      
      default:{
        return state;
      }
    }
    }
    
    const initState={
        username:"",
      password:"",
     
   
     
    };
  
    

const Signinnew = () => {
const navigate=useNavigate()
    
    // const dispatch=useDispatch();
    // const [state,SetDispatch]=useReducer(reducer,initState);
    // const navigate=useNavigate();
    // const location=useLocation();

    // const toPath=location?.state?.from?.pathname || '/';
// const [userDetails,setUserDetails]=useState({
//     password:"",
//     username:""
// })

// const handleClick=()=>{
//     dispatch(login(state)).then(r=>{
//      if(r.type===LOGIN_SUCCESS){
//      //   navigate("/login" , {replace:true})
//      console.log("login success")
//      }
//     })
//  }
// const handleLogin=()=>{
//     console.log(userDetails)
// //   if(userDetails.username && userDetails.password)
// //   {
//     dispatch(login(userDetails)).then(res=>{
//       if(res.type===LOGIN_SUCCESS)
//       {
//         // navigate(`${toPath}`,{replace:true})
//         console.log("login successfully")
//       }
     
//     })
//   }
 
// }
const [emaillog,setEmaillog] = useState("");
const [passwordlog,setPasswordlog] = useState("");
console.log(emaillog)
console.log(passwordlog)

const [flag,setFlag] = useState(false);
const [home,setHome] = useState(false);




function handleLogin(e) {
    console.log("clicked")
  e.preventDefault();
  let pass = JSON.parse(localStorage.getItem("Password"))
  let mail = JSON.parse(localStorage.getItem("Email"))  
  console.log(pass)
  console.log(mail) 
  

  if (passwordlog != pass || emaillog != mail) {
    setFlag(true);
    setHome(false);
    alert ("Invalid username or password");
  } else {
    setHome(true);
    setFlag(false);
    // handleAuth(true);

    localStorage.setItem("token",true);
    alert("Login Sucessfull")
    navigate("/");
  }
}
useEffect(()=>{
  let token=localStorage.getItem("token");
  if(token){
    // navigate("/")
  }
})

  return (
    <div className='signinmain'>
       <img src='https://static.tacdn.com/img2/brand_refresh/Tripadvisor_Logo_dark-bg_circle-green_horizontal-lockup_registered_RGB.svg'></img>
       <div className='signupheading'>Welcome Back</div>
       <div className='signininputdiv'>
       
            <div className='emailInputHeading'>Email</div>
            <input className='mailinput' placeholder='Email' onChange={(e)=>{setEmaillog(e.target.value)}}></input>
            <div className='emailInputHeading'>Password</div>
            <input className='mailinput' placeholder="Password" onChange={(e)=>{setPasswordlog(e.target.value)}}></input>
            <div className='emailforgot'>Forgot Password ?</div>
            <div className='blackdiv' onClick={handleLogin}><p >Sign in</p></div>
          
            <div className='maildiv'>-------------Not a Member?---------------</div>
            <div  className='mailjoin' style={{display:"flex"}}><div className="mailJoin">Join</div> <div> to unlock the best of trip advisor</div></div>
            <div className='mailtext'>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement.</div>
            <div className='mailtext'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>

          
            </div>
           
    </div>
  )
}

export default Signinnew
