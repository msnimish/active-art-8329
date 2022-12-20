import * as types from "./actionTypes";

let single =   {
  "title": "U.S. POLO ASSN. Men Checked Regular Fit Casual Shirt",
  "price": 1499,
  "strikedPrice": 2499,
  "newBadge": "",
  "offBadge": 40,
  "category": "topWear",
  "subCategory": "Casual Shirt",
  "brand": "US Polo",
  "type": "Casual",
  "fit": "Regular Fit",
  "design": "Checked",
  "sleeveLength": "",
  "quantity": 0,
  "size": ["M", "XXL", "L"],
  "image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010577717-Red-1000010577717_01-2100.jpg",
  "adminID": "",
  "inStock": 5,
  "noOfSold": 0,
  "productLauchTime": ""
}


const init = {
  isLoading: false,
  isError: false,
  product: ""
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
