const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = Schema(
  {
    title: { type: String, required: true, unique: true },
    image: { type: String },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    units: [
      Schema({
        title: { type: String, required: true },
        content: { type: String, required: true },
        unitVideo: { type: String },
      }),
    ],
    students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
    teachers: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
    isDeleted: { type: Boolean, default: false },
    enrollmentCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);
courseSchema.plugin(require("./plugins/isDeletedFalse"));

module.exports = mongoose.model("Course", courseSchema);
