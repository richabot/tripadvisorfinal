import React from 'react'


import "./signup.css"
import { useReducer, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// // import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import { Link as RouterLink, useNavigate } from "react-router-dom";
// import {useDispatch} from "react-redux";
// import { register } from "../Redux/AuthReducer/action";
// import { REGISTER_SUCCESS } from "../Redux/AuthReducer/actionType";

// const reducer=(state=initState,{type,payload})=>{
//   switch(type){
//     case "name":{
//       return {...state,name:payload}
//     }
//     case "username":{
//       return {...state,username:payload}
//     }
//     case "password":{
//       return {...state,password:payload}
//     }
  
//     case "email":{
//       return {...state,email:payload}
//     }
    
//     default:{
//       return state;
//     }
//   }
//   }
  
//   const initState={
//     name:"",
//     email:"",
//     password:"",
//     username:"",
//    mobile:9876543210,
//    description:"na"
   
//   };

const Signupnew = () => {

    // const [showPassword, setShowPassword] = useState(false);
    // const [state,SetDispatch]=useReducer(reducer,initState);
    // // const navigate=useNavigate();
    
    // const dispatch=useDispatch()
    // const handleClick=()=>{
    //    dispatch(register(state)).then(r=>{
    //     if(r.type===REGISTER_SUCCESS){
    //     //   navigate("/login" , {replace:true})
    //     console.log("sign up success")
    //     }
    //    })
    // }

    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [flag,setFlag]=useState(false);
    const [login,setLogin]=useState(false);
    const navigate=useNavigate()
    
    
    const handleSubmit=(e)=>{
        console.log("clicked")
         e.preventDefault();
        // if ( !email || !password) {
        //   setFlag(true);
       
          
        // } else {
          setFlag(false);
          localStorage.setItem("Email", JSON.stringify(email));
          localStorage.setItem("Password",JSON.stringify(password));
          console.log("Saved in Local Storage");
          setLogin(!login);
          alert("Successfull");
          navigate("/login")
          
         
        // }
    }
    
  return (
    <div className='signupmain'>
       <img src='https://static.tacdn.com/img2/brand_refresh/Tripadvisor_Logo_dark-bg_circle-green_horizontal-lockup_registered_RGB.svg'></img>
       <div className='signupheading'>Join to unlock the best <br></br>of Tripadvisor</div>
       <div className='signupinputdiv'>
                  
                  <div className='signupflex'><div><div>First Name</div>
          <input className='mailinput' placeholder='First Name'></input></div>
          <div><div>Last Name</div>
          <input className='mailinput' placeholder='Last Name'  ></input></div></div>
          <div className='emailInputHeading'>Email address</div>
          <input className='mailinput' placeholder='Email'  onChange={(e)=>{setEmail(e.target.value)}}></input>
          <div className='emailInputHeading'> Create Password</div>
          <input className='mailinput' type='password' placeholder="Password"   onChange={(e)=>{setPassword(e.target.value)}}></input>
          <div className='signupcheck'><div>Yes, inform me on deals & new features. I can opt out at any time.</div></div>
          
          <div className='blackdiv' onClick={handleSubmit}><p>Join</p></div>
          <div className='maildiv' >-------------Already a Member ?---------------</div>
          <div  className='mailjoin' style={{display:"flex"}}><div className="mailJoin">Login</div> <div> using your Tripadvisor account</div></div>
          <div className='mailtext'>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement.</div>
          <div className='mailtext'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>

        
          </div>
    </div>
  )
}

export default Signupnew
