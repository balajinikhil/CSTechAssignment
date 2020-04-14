const catchAsync = require("./../utils/catchAsync");
const APIfeatures = require("./../utils/apiFeature");
const User = require("./../model/formModel");
const Designation = require("./../model/designationModel");

exports.homePage = catchAsync(async (req, res, next) => {
  res.status(200).render("home");
});

exports.formPage = catchAsync(async (req, res, next) => {
  const Des = await Designation.find();
  console.log(Des);

  res.status(200).render("form", {
    des: Des
  });
});

exports.dataPage = catchAsync(async (req, res, next) => {
  const feature = new APIfeatures(User.find(), req.query).find();
  const users = await feature.query;

  res.status(200).render("dashboard", {
    users: users
  });
});

exports.homeData = catchAsync(async (req, res, next) => {
  const newDes = await Designation.create(req.body);

  res.status(200).redirect("/form");
});

exports.formData = catchAsync(async (req, res, next) => {
  const newuser = await User.create(req.body);

  res.status(200).redirect("/admin");
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const del = await User.deleteOne({ slug: req.params.slug });

  res.status(200).redirect("/admin");
});

exports.editUser = catchAsync(async (req, res, next) => {
  const edit = await User.findOne({ slug: req.params.slug });
  const des = await Designation.find();

  res.status(200).render("edit", {
    edit: edit,
    des: des
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const update = await User.findOneAndUpdate({ slug: req.body.slug }, req.body);
  res.status(200).redirect("/admin");
});
