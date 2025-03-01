import express from "express";
import cors from "cors";
import { PORT, FRONTEND_DOMAIN } from "../constants.js";
import componentsRoutes from "./componentRoutes/index.jsx";

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

app.use("/components", componentsRoutes);

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
