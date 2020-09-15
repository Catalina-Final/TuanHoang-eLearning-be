const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true },
    units: [{ type: Schema.Types.ObjectId, ref: "Unit" }],
    students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
    teachers: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
    isDeleted: { type: Boolean, default: false },
  },
  {}
);
courseSchema.plugin(require("./plugins/isDeletedFalse"));

module.exports = mongoose.model("Course", courseSchema);
