const mongoose = require("mongoose");

const designationSchema = new mongoose.Schema({
  des: {
    type: String,
    required: [true, "please tell your designation"]
  }
});

const Designation = mongoose.model("designation", designationSchema);

module.exports = Designation;
