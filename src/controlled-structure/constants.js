import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const SERVER_DOMAIN = process.env.SERVER_DOMAIN;
export const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN;
export const ENVIRONMENT = process.env.ENVIRONMENT;
