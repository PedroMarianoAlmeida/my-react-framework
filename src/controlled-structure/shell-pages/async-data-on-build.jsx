import React from "react";
import { GithubRepos } from "../../components/example-pages/GithubRepos";

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Async data on Build</title>
      </head>
      <body>
        <main>
          <h1>Example - Async data on Build</h1>
          <p>
            TThis page call an public api, get the data, generate a static file
            with this data (so the data will be outdate if there is change after
            you build the project).
          </p>
          <p>-----GithubRepos above----</p>
          <GithubRepos />
          <p>----------------------</p>
          <p>
            Feel free to update the user using the username prop, but for this
            case doesn't make sense dynamic data. So write the prop and if you
            want change the user, hard coded again and grab the data
          </p>
          <p>!!!No JavaScript is sending to the client!!!</p>
          <p>
            While you develop and the watch mode is on, the call you be made
            every time you save the code - I don't know yet how to solve this
          </p>
          <p>
            The <b>GithubRepos</b> component cannot be used on client side code,
            because the fetch is inside the component
          </p>
        </main>
        <a href="/build/frontend">Go back to Homepage</a>
      </body>
    </html>
  );
};

export default HomePage;
