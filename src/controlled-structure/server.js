import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(JSON.stringify("Hello, world 1:36am"));
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
