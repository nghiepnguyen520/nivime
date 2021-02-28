import express from "express";
import chatController from "../controller/chat.controller";
import trainController from "../controller/train.controller";
const apiRoute = express();

apiRoute.use("/chat", chatController);
apiRoute.use("/train", trainController);

export default apiRoute;
