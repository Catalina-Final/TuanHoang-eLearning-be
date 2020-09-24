const mongoose = require("mongoose");
const User = require("./user");
const Course = require("./course");
const Schema = mongoose.Schema;

const teachingSchema = Schema(
  {
    teacher: { type: Schema.ObjectId, required: true, ref: "User" },
    teacherName: { type: String, required: true },
    course: { type: Schema.ObjectId, required: true, ref: "Course" },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

const Teaching = mongoose.model("Teaching", teachingSchema);
module.exports = Teaching;
