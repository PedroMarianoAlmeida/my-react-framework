import React from "react";
import { TextImported } from "./../../components/example-pages/TextImported";

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
          <h1>
            Example - Importing react component from outside the controlled
            structure
          </h1>
          <p>This page has HTML and a imported react component above</p>
          <p>-----TextImported above----</p>
          <TextImported />
          <p>----------------------</p>
          <p>
            In this page I am importing a React Component, but we can import any
            JavaScript file (or computer assets), but all the code will be
            executed on the shell and will be static
          </p>
          <p>No JavaScript is sending to the client</p>
        </main>
        <a href="/build/frontend">Go back to Homepage</a>
      </body>
    </html>
  );
};

export default HomePage;
