import React from "react";

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Interactive</title>
      </head>
      <body>
        <main>
          <h1>
            Example - A sync React component that reach API in a "client way"
          </h1>
          <p>
            It is the same thing that the "Interactive React example", but it is
            a client component receiving data from API
          </p>

          <p>-----TextImported above----</p>
          <div id="client-fetch-data"></div>
          <script
            type="module"
            src="/build/frontend/client-side-slots/client-fetch-data.js"
          ></script>
          <p>----------------------</p>
          <p>
            The JavaScript from slot and all the imports for now on is sending
            to the client
          </p>
          <p>
            It is was a few copy pasta but there is no "magic" involved (only
            the compiler). But we create a div with and id, create a js script
            that get this id and insert your react component (just like the
            Create React App in the old days, but instead of a single react
            entry point called root, we can add as many entry points we want)
          </p>
        </main>
        <a href="/build/frontend">Go back to Homepage</a>
      </body>
    </html>
  );
};

export default HomePage;
