import dotenv from 'dotenv';

const envLoadSuccess = dotenv.config();
if (!envLoadSuccess) {
  throw new Error('Could not find .env file')
}

export default {
  nodeEnv: process.env.NODE_ENV || 'development',

  apiPort: parseInt(process.env.API_PORT),

  databaseName: process.env.DATABASE,

  databaseUser: process.env.DATABASE_USER,

  databasePassword: process.env.DATABASE_PASSWORD,

  dropDatabaseOnRestart: true,

  bootstrapData: true,
}
