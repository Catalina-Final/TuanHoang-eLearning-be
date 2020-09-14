const mongoose = require("mongoose");
const faker = require("faker");
const Course = require("../models/course");
const Student = require("../models/student");
const Submission = require("../models/submission");
const Teacher = require("../models/teacher");
const Unit = require("../models/unit");
const User = require("../models/user");

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
    const userNum = 15;
    let students = [];
    const studentNum = 10;
    let teachers = [];
    const teacherNum = 5;
    console.log("| Create 15 users:");
    console.log("| Create 10 students");
    console.log("| Create 5 teachers");
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
          teachers.push(teacher);
        });
      }
    }

    let units = [];
    const unitNum = 10;
    const randomIndex = getRandomInt(0, unitNum - 3); //studentindex and unit index equal number 10
    console.log("| Create 10 units:");
    for (let i = 0; i < unitNum; i++) {
      await Unit.create({
        title: faker.lorem.sentence(),
        content: {
          description: faker.lorem.sentence(),
          instruction: {
            header: faker.lorem.sentence(),
            body: faker.lorem.paragraph(),
            footer: faker.lorem.sentence(),
          },
          videos: faker.internet.email(),
        },
      }).then(function (unit) {
        console.log("Created new unit: " + unit.title);
        units.push(unit);
      });
    }
    let courses = [];
    console.log("| Create 1 course:");
    await Course.create({
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      image: faker.lorem.sentence(),
      units: [
        units[randomIndex]._id,
        units[randomIndex + 1]._id,
        units[randomIndex + 2]._id,
      ],
      students: [
        students[randomIndex]._id,
        students[randomIndex + 1]._id,
        students[randomIndex + 2]._id,
      ],
      teachers: [teachers[getRandomInt(0, teacherNum - 1)]._id],
    }).then(async function (course) {
      console.log("Created new course: " + course);
      courses.push(course);
      for (let i = 0; i < course.units.length; i++) {
        for (let j = 0; j < course.students.length; j++) {
          await Submission.create({
            student: course.students[j]._id,
            unit: course.units[i]._id,
            course: course._id,
            content: faker.lorem.sentence(),
          });
        }
      }
    });
  } catch (error) {
    console.log("error at generateData", error);
  }
};
const main = async (resetDB = false) => {
  if (resetDB) await generateData();
};
main(false);
