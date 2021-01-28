import dotenv from 'dotenv';

const enviroment = dotenv.config();

if (!enviroment) {
  throw new Error('Config file was not found');

}

export default {
  PORT: process.env.PORT || 3005,
  SERVICE_PREFIX: process.env.SERVICE_PREFIX || '/api',
  VERSION: process.env.VERSION || 1,
  MONGODB_URI: process.env.MONGODB_URI || null,
  JWT_SECRET: process.env.JWT_SECRET || ''
}