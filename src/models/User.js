import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true }
});

// Avoid compiling the model multiple times when using it in development mode
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
