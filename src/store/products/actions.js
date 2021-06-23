import Axios from "axios";
import { apiUrl } from "../../config/constants";


export const fetchProductsAction = (products) => ({
  type: "FETCH_PRODUCTS",
  payload: products,
});



export const fetchProducts = () => {
    
  return async (dispatch) => {
    console.log('fetchproducts was called')
    const response = await Axios.get(`${apiUrl}`);

    console.log('respons from async call', response.data.response.resultData.productList);
    dispatch(fetchProductsAction(response.data.response.resultData.productList));
    
  };
};