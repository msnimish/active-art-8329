import * as types from "./actionTypes";
import axios from "axios";
import BASE_URL from "../../url.js"

const getSingleProductRequest = () => {
  return {
    type: types.GET_SINGLE_PRODUCT_REQUEST,
  };
};

const getSingleProduct =(productID)=> (dispatch) => {
  dispatch(getSingleProductRequest());
  return axios
    .get(`${BASE_URL}products/singleProduct/${productID}`)
    .then((res) => {
      dispatch({ type: types.GET_SINGLE_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(dispatch({ type: types.GET_SINGLE_PRODUCT_FAILURE }));
};

export {getSingleProduct };








/*
const getMusicSuccess = (payload)=>{
    return {
        type: types.GET_MUSIC_SUCCESS,
        payload
    }
}

const getMusicFailure = ()=>{
    return {
        type: types.GET_MUSIC_FAILURE
    }
}


const getMusic = (dispatch) => {
axios
.get(`http://localhost:8080/albums`)
.then((res)=> dispatch(getMusicSuccess(res.data)))
}
*/
