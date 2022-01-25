import React from "react";
import data from "./Data";
import Card from "../Card";

export default function Portfolio() {
  //-----------------------------------------------------------------------------------------
  // Generate card components
  //-----------------------------------------------------------------------------------------

  let generateCards = data.map((obj) => {
    return <Card name={obj.name} url={obj.url} key={obj.id} />;
  });

  //-----------------------------------------------------------------------------------------
  // return jsx, call array
  //-----------------------------------------------------------------------------------------

  return <div className="wrapperCards">{generateCards}</div>;
}
