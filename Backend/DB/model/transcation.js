const mongoose = require("mongoose");
const { Schema } = mongoose;

const transcationSchema = new Schema({
  accountNo: Number,
  name: String,
  isminor: Boolean,
});

const Transcation = mongoose.model("Transcation", transcationSchema);

module.exports = { Transcation };
