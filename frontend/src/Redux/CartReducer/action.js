import * as types from "./actionTypes";
import axios from "axios";
import  BASE_URL  from "../../url";

const getCartRequest = () => {
  return {
    type: types.GET_CART_REQUEST,
  };
};

const getCart  = (dispatch) => {
  dispatch(getCartRequest());
  return axios
    .get(`${BASE_URL}cart`)
    .then((res) => {
      dispatch({ type: types.GET_CART_SUCCESS, payload: res.data });
    })
    .catch(dispatch({ type: types.GET_CART_FAILURE }));
};




const addToCartRequest = () => {
  return {
    type: types.ADD_CART_REQUEST,
  };
};


const addToCart = (payload) => (dispatch) => {
  return axios
    .post(`${BASE_URL}cart/addtocart`, payload)
    .then((res) => {
      console.log(res.data)
      if(res.data.msg === "added"){
        alert ("added")
      }else if(res.data.msg === "alreadypresent"){
        alert ("alreadyPresent")
        console.log("p")
      }
      dispatch({ type: types.ADD_CART_SUCCESS, payload: res.data });
    })
    .then(()=> dispatch(getCart))
    .catch(dispatch({ type: types.ADD_CART_FAILURE }));
};


const updateCart = (id, payload) => (dispatch) => {
  console.log(id, payload)
  return axios
    .patch(`${BASE_URL}cart/updatecart/${id}`,payload )
    .then((res) => {
      console.log('cart')
      dispatch({ type: types.UPDATE_CART_SUCCESS, payload: res.data });
    })
    .then(()=> dispatch(getCart))
    .catch(dispatch({ type: types.UPDATE_CART_FAILURE }));
};


const removeCartRequest = () => {
  return {
    type: types.REMOVE_CART_REQUEST,
  };
};

const removeCart = (id) => (dispatch) => {
  console.log(id)
  return axios
    .delete(`${BASE_URL}cart/removeFromCart/${id}`)
    .then((res) => {
      console.log('cart')
      dispatch({ type: types.REMOVE_CART_SUCCESS, payload: res.data });
    })
    .then(()=> dispatch(getCart))
    .catch(dispatch({ type: types.REMOVE_CART_FAILURE }));
};



export { getCart, addToCart, updateCart,removeCart };







