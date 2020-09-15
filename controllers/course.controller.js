const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../src/helpers/utils.helper");
const Course = require("../src/models/course");

const courseController = {};

//Create
courseController.createNew = catchAsync(async (req, res, next) => {
  //   const author = req.userId;
  const { title, description } = req.body;
  let { image } = req.body;
  // if (req.files) {
  //   images = req.files.map((file) => {
  //     return file.path.split("public")[1].split("\\").join("/");
  //   });
  // }

  const course = await Course.create({
    title,
    description,
    image,
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
  limit = parseInt(limit) || 10;

  const totalCourses = await Course.countDocuments({
    ...filter,
  });
  const totalPages = Math.ceil(totalCourses / limit);
  const offset = limit * (page - 1);
  const courses = await Course.find(filter)
    .sort({ ...sortBy, createdAt: -1 })
    .skip(offset)
    .limit(limit)
    .populate("author");
  return sendResponse(res, 200, true, { courses, totalPages }, null, "");
});

//Read single
courseController.getSingleCourse = catchAsync(async (req, res, next) => {
  // console.log("req", req.params.id);
  let course = await Course.findById(req.params.id);
  if (!course)
    return next(
      new AppError(
        404,
        "Course not found",
        "Get Single Course by that ID Error"
      )
    );
  course = course.toJSON();

  return sendResponse(res, 200, true, course, null, null);
});

//Update single

courseController.updateSingleCourse = catchAsync(async (req, res, next) => {
  // const author = req.userId;

  const blogId = req.params.id;
  const { title, description, image } = req.body;

  const course = await Course.findOneAndUpdate(
    { _id: blogId },
    { title, description, image },
    { new: true }
  );
  if (!course)
    return next(
      new AppError(
        400,
        "Course not found or User not authorized",
        "Update Blog Error"
      )
    );
  return sendResponse(res, 200, true, course, null, "Update Blog successful");
});
module.exports = courseController;
