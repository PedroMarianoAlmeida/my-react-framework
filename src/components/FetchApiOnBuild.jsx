import React from "react";

export const FetchApiOnBuild = async () => {
  const data = await fetch("http://localhost:3000");
  const res = await data.json();

  return <p>{res}</p>;
};
