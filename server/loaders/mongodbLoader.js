import mongoose from 'mongoose'

export async function connectToMongoDb({config}){
  const connection = await mongoose
  .connect(
    config.MONGODB_URI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
  )
  return connection.connection.db;
}