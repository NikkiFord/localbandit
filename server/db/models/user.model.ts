import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = {
  name: String,
  savedEvents: [],
  spotify: {
    id: String,
    accessToken: String,
    playlist: {
      name: String,
      id: String
    }
  },
  facebookId: {
    id: String,
    accessToken: String
  }
};

const newUser = new Schema(schema, { strict: false });

const User = mongoose.model("User", newUser);

// Export the User model
export default User;
