import * as types from "./actionTypes";
import data from "../../data.json"


const init = {
  isLoading: true,
  isError: false,
  products: [],
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };

    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        products: [],
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
