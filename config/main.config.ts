export const MAIN_CONFIG = {
  port: process.env.PORT || 3000,
  mongoURL: process.env.MONGO_DB_URL || "mongodb://127.0.0.1:27017/nivime",
  env: process.env.NODE_ENV || "development",
};
