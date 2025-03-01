import React from "react";
import { WellCome } from "../../components/Welcome";

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Basic HTML Structure A</title>
      </head>
      <body>
        <main>
          <h1>About Page 12am</h1>
          <WellCome />
          <div id="about-slot-1"></div>
          <script
            type="module"
            src="/build/frontend/client-side-slots/about-slot-1.js"
          ></script>
        </main>
      </body>
    </html>
  );
};

export default HomePage;
