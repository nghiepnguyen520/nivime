import { model, Schema, Document } from "mongoose";

export interface IAnswer {
  answer: string[];
}

export interface ITrain extends Document, IAnswer {
  question: string;
  data: Date;
}
