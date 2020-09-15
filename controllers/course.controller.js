const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../src/helpers/utils.helper");
const Course = require("../src/models/course");

const courseController = {};

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
module.exports = courseController;
