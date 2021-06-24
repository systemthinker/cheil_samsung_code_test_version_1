/* eslint-disable import/no-anonymous-default-export */
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_COLOR":
      console.log("set color was called", action.payload);
      return (state = [action.payload]);
    default:
      return state;
  }
};
