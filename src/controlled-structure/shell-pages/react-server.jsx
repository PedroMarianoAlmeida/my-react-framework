import React from "react";
import { SERVER_DOMAIN } from "./../constants";

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
          <h1>Example - React Server - Work in Progress</h1>
          <p>
            Now it is a big jump on complexity in the final result, but I will
            explain step by step, but the result first and explanation just
            above
          </p>
          <h2>Set up</h2>
          <ul>
            <li>
              Add the SERVER_DOMAIN value as global variable (the script above
              the title tag)
            </li>
            <li>
              The same as client slot, add div with id and script (but the slot
              folder is different)
            </li>
            <li>
              On slot adjust the div id, path to the component (and fallback as
              optional), and the server path to the component (the last one not
              implemented)
            </li>
            <li>
              On server{" "}
              <b>
                src/controlled-structure/server/componentRoutes/index.jsx (as
                default)
              </b>{" "}
              create a new route with the component that should be served
            </li>
          </ul>
          <p>-----Component bellow----</p>
          <div id="about-slot-2"></div>
          <script
            type="module"
            src="/build/frontend/server-side-slots/about-server-slot-1.js"
          ></script>
          <p>----------------------</p>

          <h2>The server</h2>
          <ul>
            <li>
              It is a simple express server, no big deal... the entry point file
              is located on <b>src/controlled-structure/server/index.js</b>
            </li>
            <li>
              Check the <b>env.example</b> file and remove the <b>.example</b>{" "}
              from end. Then the server runs on port 3000
            </li>
            <li>
              Run the command <b>startServer</b> (there is a nodemon.json with
              some configs)
            </li>
            <li>
              The env has the frontend and backend addresses, this is required
              for communication between them and one knows where the other is
              located (in the end this projects has folders frontend and
              backend... you can deploy it in different places)
            </li>
          </ul>
          <h2>The endpoints</h2>

          <h3>http://localhost:3000/</h3>
          <p>It is an endpoint that has a hello World message string</p>

          <h3>http://localhost:3000/components/Welcome</h3>
          <p>It is a endpoint that has a React Component as string</p>
          <p>
            The same way that you probably create JSON responses with Express,
            the <b>prerenderToNodeStream</b> is kind of a stringify of a React
            into text (It is not the same thing because is async, but this is
            not important at the moment)
          </p>

          <h2>Notes</h2>
          <p>
            The endpoint name and component name is the same for convenience,
            feel free to naming the endpoints and components as your wish. I
            already create the express.Router to put all components into one
            place, but this is not forced
          </p>
          <p>
            The server can be used for other things not related to render
            components, it is (again) a simple Express server
          </p>
          <p>
            The JavaScript sent to client is only the required to hydrate the
            component, all the rest was mounted on server and received by client
            as a string and then replace the slot
          </p>
          <p>A automated way to get the endpoint is work in progress</p>
        </main>
        <a href="/build/frontend">Go back to Homepage</a>
      </body>
    </html>
  );
};

export default HomePage;
