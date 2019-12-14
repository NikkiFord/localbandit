import mongoose from "mongoose";
import User from "./models/user.model";

mongoose.connect("mongodb://24.11.127.243:27017/localbandit", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default {
  User
};
