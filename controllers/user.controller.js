const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../src/helpers/utils.helper");
const User = require("../src/models/user");
const bcrypt = require("bcryptjs");
const utilsHelper = require("../src/helpers/utils.helper");
const Enrollment = require("../src/models/enrollment");
const userController = {};

userController.register = catchAsync(async (req, res, next) => {
  let { name, email, avatar, password, role } = req.body;
  let user = await User.findOne({ email });
  if (user)
    return next(new AppError(409, "User already exists", "Register Error"));

  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);
  //   const emailVerificationCode = utilsHelper.generateRandomHexString(20);
  //   // const emailVerificationCode = await bcrypt.hash(email, salt);
  user = await User.create({
    name,
    email,
    password,
    avatar,
    role,
    // emailVerificationCode,
    // emailVerified: false,
  });
  const accessToken = await user.generateToken();

  //   const verificationURL = `${FRONTEND_URL}/verify/${emailVerificationCode}`;
  //   const emailData = await emailHelper.renderEmailTemplate(
  //     "verify_email",
  //     { name, code: verificationURL },
  //     email
  //   );
  //   if (!emailData.error) {
  //     emailHelper.send(emailData);
  //   } else {
  //     return next(new AppError(500, emailData.error, "Create Email Error"));
  //   }

  return sendResponse(
    res,
    200,
    true,
    { user, accessToken },
    null,
    "Create user successful"
  );
});
userController.getCurrentUser = catchAsync(async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  return sendResponse(
    res,
    200,
    true,
    { user },
    null,
    "Get current user successful"
  );
});
userController.getEnrollCourses = catchAsync(async (req, res, next) => {
  let userId = req.userId;

  let courses = await Enrollment.find({
    student: userId,
  }).populate("course");
  return sendResponse(res, 200, true, courses, null, null);
});

userController.getAllUsers = catchAsync(async (req, res, next) => {
  let { page, limit, sortBy, ...filter } = { ...req.query };
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 100;

  const totalUsers = await User.countDocuments({
    ...filter,
  });
  const totalPages = Math.ceil(totalUsers / limit);
  const offset = limit * (page - 1);
  const users = await User.find(filter)
    .sort({ ...sortBy, createdAt: -1 })
    .skip(offset)
    .limit(limit)
    .populate("author");
  return sendResponse(res, 200, true, { users, totalPages }, null, "");
});

module.exports = userController;
