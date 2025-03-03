import React from "react";

const getPagePath = (fileName) => {
  return `/build/frontend/${fileName.replace(".jsx", "")}.html`;
};

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
          <h1>Home Page</h1>
          <section>
            <h2>Examples (sorted by complexity)</h2>

            <ul>
              <li>
                <a href={getPagePath("only-html")}>Only Shell</a>
              </li>
              <li>
                <a href={getPagePath("with-react-in-same-file")}>
                  A React component inline on shell
                </a>
              </li>
              <li>
                <a href={getPagePath("with-react-imported")}>
                  A React component imported and rendered on shell
                </a>
              </li>
              <li>
                <a href={getPagePath("with-interactivity")}>
                  A Interactive React component
                </a>
              </li>
              <li>
                <a href={getPagePath("client-fetch-data")}>
                  A React component that reach API in a "client way"
                </a>
              </li>
              <li>
                <a href={getPagePath("async-data-on-build")}>
                  Get async data and render on build time
                </a>
              </li>
              <li>
                <a href={getPagePath("react-server")}>
                  Render React component on server
                </a>
              </li>
              <li>
                <a href={getPagePath("react-server-with-props")}>
                  Render React component on server with props
                </a>
              </li>
              <li>
                <a href={getPagePath("state-management-same-client-slot")}>
                  State management in same client slot
                </a>
              </li>
              <li>
                <a href={getPagePath("state-management-different-slots-local-storage")}>
                  State management in 2 different slots using Local Storage
                </a>
              </li>
            </ul>
          </section>
        </main>
      </body>
    </html>
  );
};

export default HomePage;
