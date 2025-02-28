import React from "react";
import { renderToString } from "react-dom/server";

export const generateShell = () => {
  const html = renderToString(<div>ABCD</div>);

  console.log({ html });
};
