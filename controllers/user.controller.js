const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../src/helpers/utils.helper");
const User = require("../src/models/user");
const bcrypt = require("bcryptjs");
const utilsHelper = require("../src/helpers/utils.helper");
const userController = {};

userController.register = catchAsync(async (req, res, next) => {
  let { name, email, avatar, password } = req.body;
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

module.exports = userController;
