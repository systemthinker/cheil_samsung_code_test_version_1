import React from "react";

export default function ColorChoice({ backGroundColor, index, clickedIndex }) {
  const color = backGroundColor;
  const i = index;
  const clicked = clickedIndex;
  let border = "2px solid white";

  if (i === clicked) {
    border = "3px solid black";
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
    border: `${border}`,

    marginRight: "20px",
    cursor: "pointer",
  };
  return <div style={style}></div>;
}
