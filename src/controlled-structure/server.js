import express from "express";
import { PORT } from "./../controlled-structure/constants";

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(JSON.stringify("Hello, world 1:36am"));
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
