const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const submissionSchema = Schema({
  student: { type: Schema.Types.ObjectId, require: true, ref: "Student" },
  unit: { type: Schema.Types.ObjectId, require: true, ref: "Unit" },
  course: { type: Schema.Types.ObjectId, require: true, ref: "Course" },
  content: { type: String, require: true },
  score: { type: Number },
});
submissionSchema.plugin(require("./plugins/isDeletedFalse"));

module.exports = mongoose.model("Submission", submissionSchema);
