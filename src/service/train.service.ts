import { Train } from "../schemas/train.schema";
import _ from "lodash";

export const trainService = async (
  question: string,
  answer: string[]
): Promise<any> => {
  const response = await Train.findOne({
    question: question.toLowerCase(),
  }).exec();

  if (!response) {
    const recordCreate = await Train.create({
      answer,
      question,
    });
    if (recordCreate?.ok && recordCreate.ok === 1) {
      return {
        message: "Create new record success!",
        status: 200,
      };
    } else {
      return {
        message: "Create record err",
        status: 400,
      };
    }
  } else {
    //find and update
    const { answer: answerRecord } = response;
    const diffAnswer = _.difference(answer, answerRecord);
    if (diffAnswer && diffAnswer.length > 0) {
      const newAnswer = [...answerRecord, ...diffAnswer];
      //Update record
      const record = await Train.replaceOne(
        { _id: response._id },
        { answer: newAnswer, question: response.question }
      );
      console.log("record", record);
      if (record?.ok && record.ok === 1) {
        return {
          message: "Update Success",
          status: 200,
        };
      } else {
        return {
          message: "Update Error",
          status: 400,
        };
      }
    } else {
      return {
        message: "Record already exited!",
        status: 200
      }
    }
  }
};
