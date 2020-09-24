const mongoose = require("mongoose");
const Course = require("./src/models/course");
const Student = require("./src/models/student");
const Submission = require("./src/models/submission");
const Teacher = require("./src/models/teacher");
const User = require("./src/models/user");
const { courses } = require("./sample");

const cleanData = async (startTime) => {
  try {
    await mongoose.connection.dropDatabase();
    console.log("| Deleted all data");
    console.log("-------------------------------------------");
  } catch (error) {
    console.log(error);
  }
};
const generateData = async () => {
  try {
    // await cleanData();
    console.log("| Create courses:");
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      try {
        await Course.create(course);
        console.log(`Created course ${course.title}`);
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log("error at generateData", error);
  }
};
const main = async (resetDB = false) => {
  if (resetDB) await generateData();
};
main(true);
