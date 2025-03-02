import React from "react";

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Importing React</title>
      </head>
      <body>
        <main>
          <h1>Example - Importing react component with Interactivity</h1>
          <p>Now things start to get interested</p>
          <p>
            Above it is a div with ID (name as you wish, but keep consistent
            inside the slot file) and a script, the script need to be created on{" "}
            <b>src/controlled-structure/client-side-slots</b> (because the code
            watch this file and then generate transpiled on{" "}
            <b>/build/frontend/client-side-slots/</b>), so keep the beginning of
            the script <b>src</b> the same and change only the end with the name
            of your slot
          </p>
          <p>
            The slot file is require change the ID for your slot and the
            interactive component that you want to render
          </p>
          <p>-----TextImported above----</p>
          <div id="example-with-interactivity"></div>
          <script
            type="module"
            src="/build/frontend/client-side-slots/example-with-interactivity.js"
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
