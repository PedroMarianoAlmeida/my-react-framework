import React from "react";

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
          <session>
            <h2>Examples (sorted by complexity)</h2>
            <ul>
              <li>
                <a href="/build/frontend/only-html.html">Only Shell</a>
              </li>
              <li>
                <a href="/build/frontend/with-react-in-same-file.html">
                  A React component inline on shell
                </a>
              </li>
              <li>
                <a href="/build/frontend/with-react-imported.html">
                  A React component imported and rendered on shell
                </a>
              </li>
            </ul>
          </session>
        </main>
      </body>
    </html>
  );
};

export default HomePage;
