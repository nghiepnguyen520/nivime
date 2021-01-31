import { Chat } from "../schemas/chat.schema";

export const findByKey = async (question: string) => {
  const findData = await Chat.findOne({
    answer: `${question.toLowerCase()}`,
  });
  console.log("findData", findData);
};
