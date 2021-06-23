import React from "react";
import ColorChoice from "./ColorChoice";
import MemoryChoice from "./MemoryChoice";
import StarRating from "./StarRating";
import ImageNotAvailable from '../assets/ImageNotAvailable.png'
import { ratingTextFull, ratingTextEmpty } from "../config/constants";
import { FaGift } from "react-icons/fa";

export default function ProductCard({
  id,
  modelList,
  fmyMarketingName,
  chipOptions,
}) {
  const thumbUrl = modelList[0].thumbUrl || ImageNotAvailable;
  const thumbUrlAlt = modelList[0].thumbUrlAlt || ImageNotAvailable;
  const titleName = fmyMarketingName || 'nvt';
  const colorChoiceArray = chipOptions[0].optionList || [];
  const memoryChoiceArray = chipOptions[1].optionList || [];
  const ratingNumber = modelList[0].ratings || 0;
  const ratingNumberToFixedTwo = Number(ratingNumber).toFixed(2);
  const ratingNumberCeil = Number(Math.ceil(ratingNumber));
  const ratingFull = ratingTextFull;
  const ratingEmpty = ratingTextEmpty;

  const reviewCount = modelList[0].reviewCount || 'nvt';
  const price = modelList[0].price || 'nvt';
  const storePromotion = modelList[0].storePromotions[0].promotionText || 'nvt'

  const ratingArray = [];

  function starRating() {
    for (let i = 1; i <= 5; i++) {
      ratingNumberCeil >= i
        ? ratingArray.push(ratingFull)
        : ratingArray.push(ratingEmpty);
    }
  }

  starRating();
  return (
    <div>
      <h3 style={{marginTop : '60px'}}>{titleName}</h3>
      <img src={thumbUrl} alt={thumbUrlAlt} />
      
      
      <div>
        {colorChoiceArray.map((colorChoice, index) => {
          return (
            <span key={index}>
              <ColorChoice backGroundColor={colorChoice.optionCode} />
            </span>
          );
        })}
      </div>

      <div>
        {memoryChoiceArray.map((memoryOption, index) => {
          return (
            <span key={index}>
              <MemoryChoice textValue={memoryOption.optionCode} />
            </span>
          );
        })}
      </div>
      <div>
        {ratingArray.map((rating, index) => {
          return (
            <span key={index}>
              {" "}
              <StarRating value={rating} />{" "}
            </span>
          );
        })}{" "}
        <span>{ratingNumberToFixedTwo}</span>
        <span>({reviewCount})</span>
      </div>
      <div>
        <h2>€ {price} </h2>
      </div>
      <div>
        <FaGift />
        <span>{' '}{storePromotion}</span>
      </div>
    </div>
  );
}
