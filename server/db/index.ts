import mongoose from "mongoose";
import User from "./models/user.model";

mongoose.connect("mongodb://localhost/localbandit", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default {
  User
};
