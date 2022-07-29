import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"



const init=
    {
        isAuth:false,
        token:"",
        isLoading:false,
        isError:false,
    }


export const reducer =(state=init,{type,payload})=>{
switch(type){
    case REGISTER_REQUEST:{
        return {...state,isLoading:true};
    }
    case REGISTER_SUCCESS:{
        return {...state,isLoading:false};
    }
    case REGISTER_FAILURE:{
        return {...state,isLoading:false,isError:true};
    }
    case LOGIN_REQUEST:{
        return {...state,isLoading:true};
    }
    case LOGIN_SUCCESS:{
        return {...state,isLoading:true,token:payload,isAuth:true};
    }
    case LOGIN_FAILURE:{
        return {...state,isLoading:false,isError:false};
    }
    default:{
        return state
    }
}
}