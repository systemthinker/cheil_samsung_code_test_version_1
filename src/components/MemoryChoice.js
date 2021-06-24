import React from "react";

export default function MemoryChoice({ textValue, index, clickedIndex }) {
  const i = index;
  const clicked = clickedIndex;

  function borderFunc(i, clicked) {
    let index = i;
    let border = index === clicked ? "1px solid black" : "1px solid grey";
    return border;
  }
  function colorFunc(i, clicked) {
    let index = i;
    let color = index === clicked ? "black" : "grey";
    return color;
  }

  const style = {
    border: `${borderFunc(i, clicked)}`,
    color: `${colorFunc(i, clicked)}`,
  };
  return (
    <button className="memoryButton" style={style}>
      {textValue}
    </button>
  );
}
