import mongoose, { model } from "mongoose";

//User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "The username field is mandatory"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "The email field is mandatory"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "The password field is mandatory"],
  },
  role: String,
});

const User = model("User", userSchema);

export default User;
