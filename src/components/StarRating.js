import React from "react";
import { FaStar } from "react-icons/fa";
import { ratingTextFull } from "../config/constants";

export default function StarRating({ value }) {
  const setColor = value === ratingTextFull ? "yellow" : "gray";

  const style = {
    color: `${setColor}`,
    marginTop: "10px",
    // height: "2em",
  };

  return (
    <span>
      <FaStar size={30} style={style} />
    </span>
  );
}
