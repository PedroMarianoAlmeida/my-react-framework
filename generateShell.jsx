import React from "react";
import { renderToString } from "react-dom/server";
import HomePage from "./ShellPages/index";

export const generateShell = () => {
  const html = renderToString(<HomePage />);

  console.log({ html });
};
