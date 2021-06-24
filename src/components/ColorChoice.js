import React from "react";

export default function ColorChoice({ backGroundColor, index, clickedIndex }) {
  const color = backGroundColor;
  const i = index;
  const clicked = clickedIndex;

  function boxShadowFunc(i, clicked) {
    let index = i;
    let boxShadow = index === clicked ? "0 0 3pt 1pt black" : "none";
    return boxShadow;
  }

  const style = {
    color: "white",
    fontSize: 200,
    width: "30px",
    height: "30px",
    borderRadius: "30px",
    top: "-8px",
    left: "-1px",
    position: "relative",
    backgroundColor: `${color}` || "white",
    content: "",
    display: "inline-block",
    visibility: "visible",
    border: "2px solid white",
    boxShadow: `${boxShadowFunc(i, clicked)}`,

    marginRight: "20px",
    cursor: "pointer",
  };
  return <div style={style}></div>;
}
