import React from "react";

export default function ColorChoice({ backGroundColor }) {
  const color = backGroundColor;

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
    marginRight: "20px",
  };
  return <div style={style}></div>;
}
