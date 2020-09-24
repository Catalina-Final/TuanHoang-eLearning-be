const mongoose = require("mongoose");
const faker = require("faker");
const Student = require("../models/student");
const Teacher = require("../models/teacher");
const User = require("../models/user");
const Enrollment = require("../models/enrollment");

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
    await cleanData();
    let users = [];
    const userNum = 20;
    let students = [];
    const studentNum = 10;
    let teachers = [];
    const teacherNum = 5;
    console.log("| Create 30 users:");
    console.log("| Create 20 students");
    console.log("| Create 10 teachers");
    for (let i = 0; i < userNum; i++) {
      await User.create({
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: faker.internet.email(),
        password: "123",
      }).then(function (user) {
        console.log("Created new user: " + user.name);
        users.push(user);
      });
      if (i < studentNum) {
        await Student.create({ user: users[i]._id }).then(function (student) {
          console.log("Created new student:" + student.user);
          students.push(student);
        });
      } else {
        await Teacher.create({ user: users[i]._id }).then(function (teacher) {
          console.log("Created new teacher:" + teacher.user);
          User.findByIdAndUpdate(
            { _id: users[i]._id },
            { role: "teacher" }
          ).then(function (user) {
            console.log("Update role to teacher:" + teacher.user);
            users.push(user);
          });
          teachers.push(teacher);
        });
      }
    }
  } catch (error) {
    console.log("error at generateData", error);
  }
};
const main = async (resetDB = false) => {
  // if (resetDB) await generateData();
  const enrollment = await Enrollment.findOne({
    student: "5f6c8ba8f2bd840f700d48fe",
    course: "5f6c8b88d00c582124561033",
  });
  console.log(enrollment);
};
main(true);
