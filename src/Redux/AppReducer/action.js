import {
 
    GET_BOOKS_FAILURE,
    GET_BOOKS_REQUEST,
    GET_BOOKS_SUCCESS,

  } from "./actionTypes";
  import axios from "axios";
  
  //parent function
  export const getBooks = (params) => (dispatch) => {
    dispatch({ type: GET_BOOKS_REQUEST });
    return axios
      .get(`http://localhost:8080/hotels`, params)
      .then((r) => dispatch({ type: GET_BOOKS_SUCCESS, payload: r.data }))
      .catch((err) => dispatch({ type: GET_BOOKS_FAILURE, payload: err }));
  };
  