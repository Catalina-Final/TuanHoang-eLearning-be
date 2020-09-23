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
    // students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
    // teachers: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
    isDeleted: { type: Boolean, default: false },
    enrollmentCount: { type: Number, default: 0 },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);
courseSchema.plugin(require("./plugins/isDeletedFalse"));
courseSchema.virtual("teachers", {
  ref: "Teaching",
  localField: "_id",
  foreignField: "course",
});
courseSchema.virtual("students", {
  ref: "Enrollment",
  localField: "_id",
  foreignField: "course",
});
module.exports = mongoose.model("Course", courseSchema);
