import { combineReducers } from "redux";
import products from "./products/reducer";
import color from './color/reducer';

export default combineReducers({
  color,
  products,
  });