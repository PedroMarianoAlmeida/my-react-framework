import React from "react";
import { SERVER_DOMAIN } from "../constants";

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Server</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.SERVER_DOMAIN = "${SERVER_DOMAIN}";`,
          }}
        />
      </head>
      <body>
        <main>
          <h1>Example - React Server with Props</h1>
          <h2>Passing props directly on sever route</h2>
          <p>-----Component bellow----</p>
          <div id="example-react-server-with-props-1"></div>
          <script
            type="module"
            src="/build/frontend/server-side-slots/example-react-server-with-props-1.js"
          ></script>
          <p>----------------------</p>

          <h2>Passing props as query params to server</h2>
          <p>-----Component bellow----</p>
          <div id="example-react-server-with-props-2"></div>
          <script
            type="module"
            src="/build/frontend/server-side-slots/example-react-server-with-props-2.js"
          ></script>
          <p>----------------------</p>

          <h2>Passing props from shell in global variable</h2>
          <p>-----Component bellow----</p>
          <div id="example-react-server-with-props-3"></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.name = "tarcisioandrade";`,
            }}
          />
          <script
            type="module"
            src="/build/frontend/server-side-slots/example-react-server-with-props-3.js"
          ></script>
          <p>----------------------</p>

          <h2>Reading props from frontend query params</h2>
          <p>
            Please update the URL clicking <a href="?name=RobsonTrasel">here</a>
          </p>
          <p>-----Component bellow----</p>
          <div id="example-react-server-with-props-4"></div>
          <script
            type="module"
            src="/build/frontend/server-side-slots/example-react-server-with-props-4.js"
          ></script>
          <p>----------------------</p>

          <h2>Passing props from local storage</h2>
          <p>-----Component below----</p>
          <div id="example-react-server-with-props-5"></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                localStorage.setItem("name-example-react-server-with-props-5", "Fabricio-Guima");
              `,
            }}
          />
          <script
            type="module"
            src="/build/frontend/server-side-slots/example-react-server-with-props-5.js"
          ></script>
          <p>----------------------</p>
        </main>
        <a href="/build/frontend">Go back to Homepage</a>
      </body>
    </html>
  );
};

export default HomePage;
