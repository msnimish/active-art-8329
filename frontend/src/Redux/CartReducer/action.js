import * as types from "./actionTypes";
import axios from "axios";

const getCartRequest = () => {
  return {
    type: types.GET_CART_REQUEST,
  };
};

const getCart  = (dispatch) => {
  
  dispatch(getCartRequest());
  return axios
    .get(`http://localhost:8080/cart/`)
    
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
    .post(`http://localhost:8080/cart/addtocart`, payload)
  console.log("payload", payload)
    .then((res) => {
      console.log('cart')
      dispatch({ type: types.ADD_CART_SUCCESS, payload: res.data });
    })
    // .then(()=> dispatch(getCart()))
    .catch(dispatch({ type: types.ADD_CART_FAILURE }));
};


const updateCart = (id, payload) => (dispatch) => {
  console.log(id, payload)
  return axios
    .patch(`http://localhost:8080/cart/updatecart/${id}`,payload )
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
    .delete(`http://localhost:8080/cart/removeFromCart/${id}`)
    .then((res) => {
      console.log('cart')
      dispatch({ type: types.REMOVE_CART_SUCCESS, payload: res.data });
    })
    .then(()=> dispatch(getCart))
    .catch(dispatch({ type: types.REMOVE_CART_FAILURE }));
};



export { getCart, addToCart, updateCart,removeCart };







