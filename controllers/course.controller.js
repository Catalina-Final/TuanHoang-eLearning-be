const mongoose = require("mongoose");
const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../src/helpers/utils.helper");
const Course = require("../src/models/course");
const Enrollment = require("../src/models/enrollment");
const Teaching = require("../src/models/teaching");
const User = require("../src/models/user");
const courseController = {};

//Create
courseController.createNew = catchAsync(async (req, res, next) => {
  //   const author = req.userId;
  const { title, description, units } = req.body;
  let { image } = req.body;
  // if (req.files) {
  //   images = req.files.map((file) => {
  //     return file.path.split("public")[1].split("\\").join("/");
  //   });
  // }
  const course = await Course.create({
    title,
    units,
    image,
    description,
  });
  return sendResponse(
    res,
    200,
    true,
    course,
    null,
    "Create new course successful"
  );
});

//Read
//Read all
courseController.getAllCourses = catchAsync(async (req, res, next) => {
  let { page, limit, sortBy, ...filter } = { ...req.query };
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 100;

  const totalCourses = await Course.countDocuments({
    ...filter,
  });
  const totalPages = Math.ceil(totalCourses / limit);
  const offset = limit * (page - 1);
  const courses = await Course.find(filter)
    .sort({ ...sortBy, createdAt: -1 })
    .skip(offset)
    .limit(limit)
    .populate("teachers");

  return sendResponse(res, 200, true, { courses, totalPages }, null, "");
});

//Read single
courseController.getSingleCourse = catchAsync(async (req, res, next) => {
  console.log("req", req.params.id);
  let course = await Course.findById(req.params.id)
    .populate("teachers")
    .populate("students");
  const teachers = await Teaching.find({ course: course._id }).populate(
    "teacher"
  );

  if (!course)
    return next(
      new AppError(
        404,
        "Course not found",
        "Get Single Course by that ID Error"
      )
    );
  course = course.toJSON();

  return sendResponse(
    res,
    200,
    true,
    { course: { ...course, teacherss: teachers } },
    null,
    null
  );
});

//Update single

courseController.updateSingleCourse = catchAsync(async (req, res, next) => {
  // const author = req.userId;

  const courseId = req.params.id;
  const { title, description, price, image } = req.body;

  const course = await Course.findOneAndUpdate(
    { _id: courseId },
    { title, description, price, image },
    { new: true }
  );
  if (!course)
    return next(
      new AppError(
        400,
        "Course not found or User not authorized",
        "Update course Error"
      )
    );
  return sendResponse(res, 200, true, course, null, "Update course successful");
});

//Delete single
courseController.deleteSingleCourse = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;
  const course = await Course.findOneAndUpdate(
    { _id: courseId },
    { isDeleted: true },
    { new: true }
  );
  if (!course)
    return next(
      new AppError(
        400,
        "Course not found or User not authorized",
        "Delete course success"
      )
    );
  return sendResponse(
    res,
    200,
    true,
    null,
    null,
    `Delete course ${course.title} successful`
  );
});

courseController.enrollCourse = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;
  const userId = req.userId;
  let enrollment = await Enrollment.findOne({
    student: mongoose.Types.ObjectId(userId),
    course: mongoose.Types.ObjectId(courseId),
  });
  if (!enrollment) {
    enrollment = await Enrollment.create({
      student: userId,
      course: courseId,
      status: "enroll",
    });
  } else {
    if (enrollment.status !== "graduated" && enrollment.status !== "enroll") {
      enrollment = await Enrollment.findByIdAndUpdate(
        enrollment._id,
        { $set: { status: "enroll" } },
        { new: true }
      );
    }
  }
  if (!enrollment)
    return next(
      new AppError(
        400,
        "Cannot create/update enrollment",
        "Enroll Course Error"
      )
    );
  return sendResponse(
    res,
    200,
    true,
    null,
    null,
    "Student enrolls the course successful"
  );
});

courseController.assignTeacher = catchAsync(async (req, res, next) => {
  const courseId = req.params.courseId;
  const teacherId = req.params.teacherId;
  console.log(courseId, teacherId);
  let teaching = await Teaching.findOne({
    teacher: teacherId,
    course: courseId,
  });

  const user = await User.findById(teacherId);

  if (!user) return next(new AppError(404, "teacher not found"));

  if (!teaching) {
    teaching = await Teaching.create({
      teacherName: user.name,
      teacher: user._id,
      course: courseId,
      status: "asigned",
    });
    await teaching.save();
  }
  const teachers = await Teaching.find({ course: courseId }).populate(
    "teacher"
  );
  return sendResponse(
    res,
    200,
    true,
    teachers,
    null,
    "sucessfully asign teacher"
  );
});

courseController.unassignTeacher = catchAsync(async (req, res, next) => {
  const { teachingId } = req.params;
  console.log("saasd", teachingId);
  await Teaching.findByIdAndDelete(teachingId);

  return sendResponse(res, 200, true, null, null, "Unassign teacher sucess");
});

courseController.getEnrollment = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;
  const userId = req.userId;

  let enrollment = await Enrollment.findOne({
    student: userId,
    course: courseId,
  });
  // Enrollment.findOneAndUpdate({ student: userId, course: courseId });
  console.log({ enrollment, userId, courseId });

  if (!enrollment)
    return sendResponse(res, 200, true, null, null, "Enrollment not found");
  return sendResponse(
    res,
    200,
    true,
    enrollment,
    null,
    "Get enrollment successful"
  );
});

module.exports = courseController;
