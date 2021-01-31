import express from "express";
import { body, validationResult } from "express-validator";
import { trainService } from "../service/train.service";
const trainController = express.Router();

trainController.post(
  "/",
  body("question").isString(),
  body("answer").isArray(),
  async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { question, answer } = req.body;
    const response = await trainService(question, answer);
    res.json({
      message: "api train",
    });
  }
);

export default trainController;
