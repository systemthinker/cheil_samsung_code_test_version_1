import React from "react";
import ColorChoice from "./ColorChoice";
import MemoryChoice from "./MemoryChoice";
import StarRating from "./StarRating";
import ImageNotAvailable from "../assets/ImageNotAvailable.png";
import { ratingTextFull, ratingTextEmpty } from "../config/constants";
import { FaGift } from "react-icons/fa";
import CrossedPrice from "./CrossedPrice";

export default function ProductCard({
  id,
  modelList,
  fmyMarketingName,
  chipOptions,
}) {
  const thumbUrl = modelList[0].thumbUrl || ImageNotAvailable;
  const thumbUrlAlt = modelList[0].thumbUrlAlt || ImageNotAvailable;
  const titleName = fmyMarketingName || " ";
  const colorChoiceArray = chipOptions[0].optionList || [];
  const memoryChoiceArray = chipOptions[1].optionList || [];
  const ratingNumber = modelList[0].ratings || 0;
  const ratingNumberToFixedTwo = Number(ratingNumber).toFixed(2);
  const ratingNumberCeil = Number(Math.ceil(ratingNumber));
  const ratingFull = ratingTextFull;
  const ratingEmpty = ratingTextEmpty;

  const reviewCount = modelList[0].reviewCount || "";
  const price = modelList[0].priceDisplay || 0;
  const promotionPrice = modelList[0].promotionPriceDisplay || price || 0;
  const storePromotion =
    modelList[0].storePromotions[0].promotionText
      .replace(/<p[^>]*>/g, "")
      .replace(/<\/p>/g, " ")
      .replace(/&euro;/g, "€") || " ";

  const ratingArray = [];

  console.log("promotionPrice", promotionPrice);

  function starRating(ratingNumberCeil) {
    for (let i = 1; i <= 5; i++) {
      ratingNumberCeil >= i
        ? ratingArray.push(ratingFull)
        : ratingArray.push(ratingEmpty);
    }
  }

  function checkForPromotionPrice(price, promotionPrice) {
    try {
      if (promotionPrice > price) {
        return <CrossedPrice price={price} />;
      } else {
        return;
      }
    } catch (err) {
      console.log("error is", err);
    }
  }

  starRating(ratingNumberCeil);
  return (
    <div>
      <div className="gradientBorder">
        <h3 style={{ marginTop: "30px" }}>{titleName}</h3>
        <img className="imageProductCard" src={thumbUrl} alt={thumbUrlAlt} />

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
          <p className="promotionPrice">
            {checkForPromotionPrice(price, promotionPrice)}
          </p>
          <h2>€ {promotionPrice} </h2>
        </div>

        <div className="underlineDiv"></div>

        <div className="promotionDiv">
          <FaGift />
          <span className="promotionSpan"> {storePromotion}</span>
        </div>
        <div>
          <button className="buyButton"> Koop nu</button>
        </div>
      </div>
    </div>
  );
}
