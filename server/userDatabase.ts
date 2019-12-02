import mongoose from 'mongoose';


const Schema = mongoose.Schema;
 
const newUser = new Schema({
  name: String
});


const User = mongoose.model("User", newUser);

// Export the User model
module.exports = User;