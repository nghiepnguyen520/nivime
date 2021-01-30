import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { MAIN_CONFIG } from "./config/main.config";
import { connectDb } from "./config/db.config";
dotenv.config();

const app = express();

// Connect db
connectDb(MAIN_CONFIG.mongoURL);

app.use(cors());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Why you go there?!");
});

app.listen(MAIN_CONFIG.port, () =>
  console.log(`server is listening on ${MAIN_CONFIG.port}`)
);
