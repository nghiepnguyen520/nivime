import { model, Schema, Document } from "mongoose";

//export interface IAnswer {
//  answer: string[];
//}

//export interface ITrain extends Document, IAnswer {
//  question: string;
//  data: Date;
//}

const TrainSchema: Schema = new Schema({
  question: String,
  answer: [String],
  date: { type: Date, default: Date.now },
});

export const Train = model<any>("Train", TrainSchema);
