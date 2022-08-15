import mongoose from 'mongoose';

const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@tasque.ddkvs49.mongodb.net/?retryWrites=true&w=majority`;

export async function db() {
  if ([1, 2].includes(mongoose.connection.readyState)) return mongoose;

  await mongoose.connect(connectionString);

  return mongoose;
}

