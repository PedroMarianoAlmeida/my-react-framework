import React from "react";
import { SERVER_DOMAIN } from "./../controlled-structure/constants";

export const FetchApiOnBuild = async () => {
  const data = await fetch(SERVER_DOMAIN);
  const res = await data.json();

  return <p>{res}</p>;
};
