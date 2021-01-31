import express from "express";
import { getDataService } from "../service/chat.service";
const chatController = express.Router();

chatController.get("/", async (req: any, res: any) => {
  const response = await getDataService();
  res.json({
    message: response,
  });
});

chatController.post("/", (req: any, res: any) => {
  res.json({
    message: "API POST",
  });
});

export default chatController;
