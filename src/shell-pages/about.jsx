import React from "react";
import { WellCome } from "../components/Welcome";

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Basic HTML Structure</title>
      </head>
      <body>
        <main>
          <h1>About Page 123A</h1>
          <WellCome />
        </main>
      </body>
    </html>
  );
};

export default HomePage;
