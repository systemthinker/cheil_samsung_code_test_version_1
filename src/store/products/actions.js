import Axios from "axios";
import { apiUrl } from "../../config/constants";


export const fetchProductsAction = (products) => ({
  type: "FETCH_PRODUCTS",
  payload: products,
});



export const fetchProducts = () => {
    
  return async (dispatch) => {
    try{
    const response = await Axios.get(`${apiUrl}`);
   
    dispatch(fetchProductsAction(response.data.response.resultData.productList));
    } catch(err){
      console.log('error message is', err.message);
    }
  };
};