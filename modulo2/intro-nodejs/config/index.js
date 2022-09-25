import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  host: process.env.HOST || "localhost",
  dbUser: process.env.DB_USER || "root",
  dbPassword: process.env.DB_PASSWORD || "",
  dbHost: process.env.DB_HOST || "localhost",
  dbName: process.env.DB_NAME || "ecommmerce",
  dbPort: process.env.DB_PORT || 3306
};