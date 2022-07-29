import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"
import axios from 'axios';

export const register=(payload)=>(dispatch)=>{
dispatch({type:REGISTER_REQUEST});

 return axios.post("https://masai-api-mocker.herokuapp.com/auth/register",payload).
 then(res=>dispatch({type:REGISTER_SUCCESS,payload:res.data})).
 catch(err=>dispatch({type:REGISTER_FAILURE}))
}


export const login=(payload)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST});
return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",payload)
.then(res=>dispatch({type:LOGIN_SUCCESS,payload:res.data})).catch
(err=>dispatch({type:LOGIN_FAILURE}));
}