import {config} from 'dotenv';
config();

export const MongoDBConfig: Record<string, string> = {
    url: process.env.MONGODB_URL as string,
}

export const JwtSecret = process.env.JWT_SECRET;