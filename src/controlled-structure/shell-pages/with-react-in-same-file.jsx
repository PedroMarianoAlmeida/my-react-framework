import React from "react";

const InlineReact = () => <p>I am a React component inside the shell file</p>;
const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Inline React in Shell</title>
      </head>
      <body>
        <main>
          <h1>Example - Inline React in Shell</h1>
          <p>This page has HTML and a inline react component above</p>
          <p>-----InlineReact above----</p>
          <InlineReact />
          <p>----------------------</p>
          <p>
            The only import is React, all the content is generated on build time
            and it is static without interactivity
          </p>
          <p>No JavaScript is sending to the client</p>
        </main>
      </body>
    </html>
  );
};

export default HomePage;
