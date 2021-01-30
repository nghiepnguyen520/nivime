import mongoose from "mongoose";

export const connectDb = async (mongoURL: string) => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connecting db:", mongoURL);
  } catch (error) {
    console.log("Connect dv err", error);
  }
};
