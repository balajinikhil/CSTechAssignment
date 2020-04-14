const mongoose = require("mongoose");
const validator = require("validator");
const slugify = require("slugify");

const userSchema = new mongoose.Schema({
  designation: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: [true, "please tell your name"]
  },
  email: {
    type: String,
    required: [true, "please tell us your email"],
    validate: {
      validator: validator.isEmail,
      message: "email is not valid"
    }
  },
  salary: {
    type: Number,
    required: [true, "please tell us your salary"]
  },
  slug: {
    type: String
  }
});

userSchema.pre("save", function(next) {
  this.slug = slugify(this.name, {
    lower: true
  });
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
