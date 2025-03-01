import React from "react";
import express from "express";
import { prerenderToNodeStream } from "react-dom/static";
import { PORT } from "./constants";

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(JSON.stringify("Hello, world 1:36am"));
});

app.get("/component", async (request, response) => {
  const { prelude } = await prerenderToNodeStream(<p>From Express Server</p>, {
    bootstrapScripts: ["/main.js"],
  });

  response.setHeader("Content-Type", "text/plain");
  prelude.pipe(response);
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
