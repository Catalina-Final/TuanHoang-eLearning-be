const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../src/helpers/utils.helper");

const User = require("../src/models/user");
const bcrypt = require("bcryptjs");
const authController = {};

authController.loginWithEmail = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }, "+password");
  if (!user)
    return next(new AppError(400, "Invalid credentials", "Login Error"));

  //   if (!user.emailVerified) {
  //     return next(new AppError(406, "Please verify your email", "Login Error"));
  //   }
  console.log(password);
  console.log("user.pass", user.password);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return next(new AppError(400, "Wrong password", "Login Error"));

  accessToken = await user.generateToken();
  return sendResponse(
    res,
    200,
    true,
    { user, accessToken },
    null,
    "Login successful"
  );
});

module.exports = authController;
