import mongoose from "mongoose";
import User from "./models/user.model";

const { MONGO_DB_CONNECTION } = process.env;

mongoose.connect(MONGO_DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default {
  User
};
