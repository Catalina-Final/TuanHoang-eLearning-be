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

authController.loginWithFacebookOrGoogle = catchAsync(
  async (req, res, next) => {
    let profile = req.user;
    profile.email = profile.email.toLowerCase();
    let user = await User.findOne({ email: profile.email });
    const randomPassword = "" + Math.floor(Math.random() * 10000000);
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(randomPassword, salt);

    if (user) {
      // if (!user.emailVerified) {
      //   user = await User.findByIdAndUpdate(
      //     user._id,
      //     {
      //       $set: { emailVerified: true, avatarUrl: profile.avatarUrl },
      //       $unset: { emailVerificationCode: 1 },
      //     },
      //     { new: true }
      //   );
      // } else {
      user = await User.findByIdAndUpdate(
        user._id,
        { avatarUrl: profile.avatarUrl },
        { new: true }
      );
      // }
    } else {
      user = await User.create({
        name: profile.name,
        email: profile.email,
        password: newPassword,
        avatarUrl: profile.avatarUrl,
      });
    }

    const accessToken = await user.generateToken();
    return sendResponse(
      res,
      200,
      true,
      { user, accessToken },
      null,
      "Login successful"
    );
  }
);

module.exports = authController;
