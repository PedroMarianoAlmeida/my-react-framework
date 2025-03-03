import React from "react";

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Interactive and State Management</title>
      </head>
      <body>
        <main>
          <h1>Example - State management in same client slot</h1>
          <p>
            This slot works like a regular client side code, everything that can
            be done in a Create React App can be done on entry point component
            on this slot
          </p>
          <p>-----GithubUserReposFinder above----</p>
          <div id="state-management-same-client-slot"></div>
          <script
            type="module"
            src="/build/frontend/client-side-slots/state-management-same-client-slot.js"
          ></script>
          <p>----------------------</p>
          <p>
            The root slot is have no props, that can have static props. All the
            state management is only AFTER the root (in the slot entry point, in
            this case the <b>GithubUserReposFinder</b> component)
          </p>
        </main>
        <a href="/build/frontend">Go back to Homepage</a>
      </body>
    </html>
  );
};

export default HomePage;
