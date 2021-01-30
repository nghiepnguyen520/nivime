export const MAIN_CONFIG = {
  port: process.env.PORT || 3000,
  mongoURL: process.env.MONGO_DB_URL || "mongodb://mongo:27017/nivime",
  env: process.env.NODE_ENV || "development",
};
