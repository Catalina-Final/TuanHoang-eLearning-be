const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Teacher Schema
const teacherSchema = Schema({
  user: { type: Schema.Types.ObjectId, require: true, ref: "User" },
  isDeleted: { type: Boolean, default: false },
});
teacherSchema.plugin(require("./plugins/isDeletedFalse"));

module.exports = mongoose.model("Teacher", teacherSchema);
