export const setColorAction = (productId,color) => ({
  type: "SET_COLOR",
  payload: {productId,color},
});
export const setColor = (productId, colorId) => {
  return (dispatch) => {
    console.log("colorId", colorId, "index", productId);
    dispatch(setColorAction(productId,colorId));
  };
};
