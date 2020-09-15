const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwtkey = require("jsonwebtoken");
const JWT_SECRECT_KEY = process.env.JWT_SECRECT_KEY;

//User Schema
const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    avatar: { type: String },
    //role
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
userSchema.plugin(require("./plugins/isDeletedFalse"));

userSchema.methods.generateToken = async function () {
  const accessToken = await jwtkey.sign({ _id: this._id }, JWT_SECRECT_KEY, {
    expiresIn: "1d",
  });
  return accessToken;
};

//export to database
module.exports = mongoose.model("User", userSchema);
