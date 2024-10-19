import mongoose from 'mongoose';

const MONGO_URI = "mongodb+srv://maddy:gB30Jo57mF1ftMOi@test01.aelnz.mongodb.net/" || process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
  });
}
