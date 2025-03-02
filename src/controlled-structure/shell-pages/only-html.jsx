import React from "react";

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Only HTML</title>
      </head>
      <body>
        <main>
          <h1>Example - Only HTML ABC</h1>
          <p>This page has only HTML written directly on shell</p>
          <p>
            The only import is React, all the content is generated on build time
            and it is static without interactivity
          </p>
          <p>No JavaScript is sending to the client</p>
        </main>
        <a href="/build/frontend">Go back to Homepage</a>
      </body>
    </html>
  );
};

export default HomePage;
