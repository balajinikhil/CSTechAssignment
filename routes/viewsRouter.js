const Router = require("express").Router();
const viewsController = require("./../controller/viewsController");

Router.route("/")
  .get(viewsController.homePage)
  .post(viewsController.homeData);

Router.route("/form")
  .get(viewsController.formPage)
  .post(viewsController.formData);

Router.route("/admin").get(viewsController.dataPage);

Router.get("/form-delete/:slug", viewsController.deleteUser);
Router.get("/form-edit/:slug", viewsController.editUser);

Router.post("/edit", viewsController.updateUser);

module.exports = Router;
