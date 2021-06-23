import React from "react";
import ColorChoice from "./ColorChoice";
import MemoryChoice from "./MemoryChoice";

export default function ProductCard({
  id,
  modelList,
  fmyMarketingName,
  chipOptions,
}) {
  const thumbUrl = modelList[0].thumbUrl;
  const thumbUrlAlt = modelList[0].thumbUrlAlt;
  const titleName = fmyMarketingName;
  const colorChoiceArray = chipOptions[0].optionList;
  const memoryChoiceArray = chipOptions[1].optionList;
  console.log("colorChoiceArray", colorChoiceArray);
  console.log("memoryChoiceArray", memoryChoiceArray);
  

  return (
    <div>
      <h3>{titleName}</h3>
      <img src={thumbUrl} alt={thumbUrlAlt} />
      <div>
        {colorChoiceArray.map((colorChoice,index)=>{
            return (<span key={index}><ColorChoice backGroundColor = {colorChoice.optionCode}/></span>)
        })}
      </div>

      <div>
        {memoryChoiceArray.map((memoryOption, index)=> {
            return (<span key={index}><MemoryChoice textValue = {memoryOption.optionCode}/></span>)
        })}
      </div>
    </div>
  );
}
