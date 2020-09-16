const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const unitSchema = Schema({
  title: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  content: Schema({
    description: { type: String, required: true },
    instruction: {
      header: { type: String },
      body: { type: String },
      footer: { type: String },
    },
    videos: [String],
  }),
  isDeleted: { type: Boolean, default: false },
});
unitSchema.plugin(require("./plugins/isDeletedFalse"));

module.exports = mongoose.model("unit", unitSchema);
