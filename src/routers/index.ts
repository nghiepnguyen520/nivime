import express from "express";
import chatController from "../controller/chat.controller";
const apiRoute = express();

apiRoute.use("/chat", chatController);

export default apiRoute;
