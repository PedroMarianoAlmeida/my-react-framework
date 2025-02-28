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
          <div id="about-slot-1"></div>
          <script type="module">console.log("TEST");</script>
          <script type="module" src="/dev/client/importTest.js"></script>
        </main>
      </body>
    </html>
  );
};

export default HomePage;
