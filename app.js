const express = require("express");
const path = require("path");
//run cors sever?
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

//to send response according to util helper
const utilsHelper = require("./src/helpers/utils.helper");

const indexRouter = require("./routes/index");

const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;
const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* DB Connections */
mongoose.plugin(require("./src/models/plugins/modifiedAt"));

mongoose
  .connect(mongoURI, {
    // some options to deal with deprecated warning
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongoose connected to ${mongoURI}`);
    require("./src/testing/testSchema");
    // require("./testSample");
  })
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "public")));

// //check overall status of sever
// app.use("/", indexRouter);

//actual api endpoints

/* Initialize Routes */
app.use("/api", indexRouter);

// catch 404 and forard to error handler
app.use((req, res, next) => {
  const err = new Error("url Not Found");
  err.statusCode = 404;
  next(err);
});

/* Initialize Error Handling */
app.use((err, req, res, next) => {
  console.log("ERROR", err);
  if (err.isOperational) {
    return utilsHelper.sendResponse(
      res,
      err.statusCode ? err.statusCode : 500,
      false,
      null,
      { message: err.message },
      err.errorType
    );
  } else {
    return utilsHelper.sendResponse(
      res,
      err.statusCode ? err.statusCode : 500,
      false,
      null,
      { message: err.message },
      "Internal Server Error"
    );
  }
});

//testschema

module.exports = app;
