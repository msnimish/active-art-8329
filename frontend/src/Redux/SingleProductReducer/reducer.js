import * as types from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  product: null
};

// let single_product =  { title: "US Polo t-shirt", brand: "US Polo", price: 5000 },

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: payload,
      };

    case types.GET_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        product: null,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
