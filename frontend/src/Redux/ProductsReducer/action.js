import * as types from "./actionTypes";
import axios from "axios";
import { BASE_URL } from "../../url";

const getProductsRequest = () => {
  return {
    type: types.GET_PRODUCTS_REQUEST,
  };
};

const getProducts = (queryParams) => (dispatch) => {
  
  dispatch(getProductsRequest());
  return axios
    .get(`${BASE_URL}products/`, queryParams)
    .then((res) => {
      console.log('hello')
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch(dispatch({ type: types.GET_PRODUCTS_FAILURE }));
};

export { getProducts };







