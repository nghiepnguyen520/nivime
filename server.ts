import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { MAIN_CONFIG } from "./config/main.config";
import { connectDb } from "./config/db.config";
import apiRoute from "./src/routers";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

// Connect db
connectDb(MAIN_CONFIG.mongoURL);

// map router
app.use("/api", apiRoute);

app.get("/", (req, res) => {
  res.json({
    message: "Home page",
  });
});

app.get("*", (req, res) => {
  res.json({
    message: "Home page",
  });
});

app.listen(MAIN_CONFIG.port, () =>
  console.log(`server is listening on ${MAIN_CONFIG.port}`)
);
