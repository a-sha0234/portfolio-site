import React from "react";
import data from "./Data";
import Card from "../Card";

export default function Portfolio() {
  let generateCards = data.map((obj) => {
    return <Card name={obj.name} url={obj.url} key={obj.id} />;
  });

  return <div>{generateCards}</div>;
}
