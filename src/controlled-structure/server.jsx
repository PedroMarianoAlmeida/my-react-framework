import React from "react";
import express from "express";
import cors from "cors";
import { prerenderToNodeStream } from "react-dom/static";
import { PORT, FRONTEND_DOMAIN } from "./constants";

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", FRONTEND_DOMAIN);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
