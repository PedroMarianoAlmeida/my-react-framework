import React from "react";

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          React Interactive and State Management into different slots (using
          localstorage)
        </title>
      </head>
      <body>
        <main>
          <h1>Example - State management in different slots - localstorage</h1>

          <p>-----TextImported above----</p>
          <div id="state-management-different-slots-local-storage-1"></div>
          <script
            type="module"
            src="/build/frontend/client-side-slots/state-management-different-slots-local-storage-1.js"
          ></script>
          <p>----------------------</p>
        </main>
        <a href="/build/frontend">Go back to Homepage</a>
      </body>
    </html>
  );
};

export default HomePage;
