import { findByKey } from "../repository/chat.repository";

export const getDataService = async () => {
  return "dev";
};

export const replyChatService = async (question: string): Promise<any> => {
  console.log("-----", question);
  return await findByKey(question);
};
