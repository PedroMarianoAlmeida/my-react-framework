import React from "react";
import { URL } from "./../controlled-structure/constants";

export const FetchApiOnBuild = async () => {
  const data = await fetch(URL);
  const res = await data.json();

  return <p>{res}</p>;
};
