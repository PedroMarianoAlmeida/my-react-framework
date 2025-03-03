import React from "react";
import { SERVER_DOMAIN } from "./../constants";

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

          <p>-----SendingInputValueToLocalStorage----</p>
          <div id="state-management-different-slots-local-storage-1"></div>
          <script
            type="module"
            src="/build/frontend/client-side-slots/state-management-different-slots-local-storage-1.js"
          ></script>
          <p>----------------------</p>

          <p>-----GithubRepoClientWay----</p>
          <div id="state-management-different-slots-local-storage-2"></div>
          <script
            type="module"
            src="/build/frontend/client-side-slots/state-management-different-slots-local-storage-2.js"
          ></script>
          <p>----------------------</p>
          <p>
            Listing the localstorage changes in slot level, and then updating
            the root component
          </p>

          <p>-----Slot that call /components/GithubRepos endpoint ----</p>
          <div id="state-management-different-slots-local-storage-3"></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                localStorage.setItem("SERVER_DOMAIN", "${SERVER_DOMAIN}");
              `,
            }}
          />
          <script
            type="module"
            src="/build/frontend/server-side-slots/state-management-different-slots-local-storage-3.js"
          ></script>
          <p>----------------------</p>

          <h2>Notes</h2>
          <p>
            There is an hydration issue on console, but I already fix it on{" "}
            <b>
              src/controlled-structure/server-side-slots/example-react-server-1.jsx
            </b>
            , now I need to replicate for other server slots
          </p>
        </main>
        <a href="/build/frontend">Go back to Homepage</a>
      </body>
    </html>
  );
};

export default HomePage;
