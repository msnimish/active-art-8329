import * as types from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  products: [
    { title: "US Polo t-shirt", brand: "US Polo", price: 5000 },
    { title: "US Polo t-shirt", brand: "US Polo", price: 5000 },
    { title: "US Polo t-shirt", brand: "US Polo", price: 5000 },
    { title: "US Polo t-shirt", brand: "US Polo", price: 5000 },
    { title: "US Polo t-shirt", brand: "US Polo", price: 5000 },
  ],
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
