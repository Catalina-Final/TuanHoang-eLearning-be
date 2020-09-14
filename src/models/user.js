const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema
const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  avatar: { type: String },
  //role
  isDeleted: { type: Boolean, default: true },
});
userSchema.plugin(require("./plugins/isDeletedFalse"));

//export to database
module.exports = mongoose.model("User", userSchema);
