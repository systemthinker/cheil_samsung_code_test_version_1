/* eslint-disable import/no-anonymous-default-export */
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return [...action.payload];
    
    default:
      return state;
  }
};
