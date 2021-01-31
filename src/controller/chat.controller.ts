import express from "express";
import { getDataService, replyChatService } from "../service/chat.service";
import { body, validationResult } from "express-validator";
const chatController = express.Router();

chatController.get("/", async (req: any, res: any) => {
  const response = await getDataService();
  res.json({
    message: response,
  });
});

chatController.post(
  "/",
  body("question").isString(),
  async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { question } = req.body;
    const response = await replyChatService(question);
    res.json({
      message: "API POST",
    });
  }
);

export default chatController;
