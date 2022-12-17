import * as types from "./actionTypes";

let single = {
  "title": "BOSSINI Men Solid Bomber Jacket",
  "price": "2,639",
  "strickPrice": "3,299",
  "newBaz": "New",
  "offBaz": "20% OFF",
  "cat": "Winterwear",
  "subCat": "Jacket",
  "brand": "Bossini",
  "image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011538716-Green-Olive-1000011538716-2022_01-2100.jpg",
  "type": "",
  "fit": "",
  "design": "Solid",
  "sleeveLength": ""
}


const init = {
  isLoading: false,
  isError: false,
  product: single
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
