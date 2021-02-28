import { model, Schema, Document } from "mongoose";

export interface IChat extends Document {
  question: [];
  data: Date;
}

const ChatSchema: Schema = new Schema({
  questions: [{ key: String, values: [String] }],
  date: { type: Date, default: Date.now },
});

export const Chat = model<IChat>("Chat", ChatSchema);
