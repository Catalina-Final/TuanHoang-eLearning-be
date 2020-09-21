const mongoose = require("mongoose");
const User = require("./user");
const Course = require("./course");
const Schema = mongoose.Schema;

const enrollmentSchema = Schema(
  {
    student: { type: Schema.ObjectId, required: true, ref: "User" },
    course: { type: Schema.ObjectId, required: true, ref: "Course" },
    status: {
      type: String,
      enum: ["enroll", "graduated", "fail"],
    },
  },
  { timestamps: true }
);

enrollmentSchema.statics.caculateEnrollment = async function (
  userId,
  courseId
) {
  let enrollmentCount = await this.find({
    student: userId,
    status: "enroll",
  }).countDocuments();
  await User.findByIdAndUpdate(userId, { enrollmentCount: enrollmentCount });

  enrollmentCount = await this.find({
    course: courseId,
    status: "enroll",
  }).countDocuments();
  await Course.findByIdAndUpdate(courseId, {
    enrollmentCount: enrollmentCount,
  });
};

enrollmentSchema.post("save", function () {
  this.constructor.caculateEnrollment(this.student, this.course);
});

// enrollmentSchema.pre(/^findOneAnd/, async function (next) {
//   this.doc = await this.findOne();
//   next();
// });

// enrollmentSchema.post(/^findOneAnd/, async function (next) {
//   await this.doc.constructor.caculateEnrollment(this.doc.student);
//   await this.doc.constructor.caculateEnrollment(this.doc.course);
// });

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
module.exports = Enrollment;
