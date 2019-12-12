import mongoose from "mongoose";

const Schema = mongoose.Schema;

const newUser = new Schema({
  name: String,
  spotify: {
    id: String,
    accessToken: String
  },
  facebookId: {
    id: String,
    accessToken: String
  }
});

const User = mongoose.model("User", newUser);

// Export the User model
export default User;
