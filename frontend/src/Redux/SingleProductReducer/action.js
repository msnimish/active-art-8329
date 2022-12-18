import * as types from "./actionTypes";
import axios from "axios";

const getProductRequest = () => {
  return {
    type: types.GET_SINGLE_PRODUCT_REQUEST,
  };
};

const getSingleProd =(id)=> (dispatch) => {
  console.log(id)
  dispatch(getProductRequest());
  return axios
    .get(`http://localhost:8080/singleProduct/${id}`)
    .then((res) => {
      console.log(res)
      dispatch({ type: types.GET_SINGLE_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(dispatch({ type: types.GET_SINGLE_PRODUCT_FAILURE }));
};

export {getSingleProd };








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
