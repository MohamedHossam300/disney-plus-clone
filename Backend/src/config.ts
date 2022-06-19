import * as dotenv from "dotenv"

dotenv.config();

export const config = {
    url: <string>process.env.MONGO_URL,
};