import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello, world X!");
  });

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
