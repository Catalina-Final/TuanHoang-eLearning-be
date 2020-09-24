const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwtkey = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

//User Schema
const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    avatar: { type: String },
    role: {
      type: String,
      enum: ["teacher", "student", "admin"],
      default: "student",
    },
    isDeleted: { type: Boolean, default: false },
    // emailVerified: { type: Boolean, default: true },
    enrollmentCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);
userSchema.plugin(require("./plugins/isDeletedFalse"));

userSchema.methods.generateToken = async function () {
  const accessToken = await jwtkey.sign(
    { _id: this._id, role: this.role },
    JWT_SECRET_KEY,
    {
      expiresIn: "1d",
    }
  );
  return accessToken;
};

//export to database
module.exports = mongoose.model("User", userSchema);
