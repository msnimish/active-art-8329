import * as types from "./actionTypes";
import data from "../../data.json"


const init = {
  isLoading: true,
  isError: false,
  products: [],
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.GET_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };

    case types.GET_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        products: [],
        isError: true,
      };


      case types.ADD_CART_SUCCESS:
        return {
          ...state,
          isLoading: false,
          products : [...state.products, payload]
        };

        case types.REMOVE_CART_SUCCESS:
        return {
          ...state,
          isLoading: false,
        };


    default:
      return state;
  }
};

export { reducer };
