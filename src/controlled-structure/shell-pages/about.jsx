import React from "react";
import { WellCome } from "../../components/Welcome";
import { FetchApiOnBuild } from "../../components/FetchApiOnBuild";
import { SERVER_DOMAIN } from "./../constants";

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Basic HTML Structure A</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.SERVER_DOMAIN = "${SERVER_DOMAIN}";`,
          }}
        />
      </head>
      <body>
        <main>
          <h1>About Page 12am</h1>
          <WellCome />
          <FetchApiOnBuild />
          <div id="about-slot-1"></div>
          <script
            type="module"
            src="/build/frontend/client-side-slots/about-slot-1.js"
          ></script>
          <div id="about-slot-2"></div>
          <script
            type="module"
            src="/build/frontend/client-side-slots/about-slot-2.js"
          ></script>
        </main>
      </body>
    </html>
  );
};

export default HomePage;
