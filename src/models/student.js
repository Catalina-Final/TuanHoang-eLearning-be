const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Student Schema

const studentSchema = Schema({
  user: { type: Schema.Types.ObjectId, require: "true", ref: "User" },
  isDeleted: { type: Boolean, default: false },
});
module.exports = mongoose.model("Student", studentSchema);
