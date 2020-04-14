const express = require("express");
const morgan = require("morgan");
const path = require("path");
//OWN PACKAGES
const globalErrorHandler = require("./controller/errorHandler");
const appError = require("./utils/appError");
const viewsRouter = require("./routes/viewsRouter");

const app = express();

//SET
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// GLOBAL MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
if ((process.env.NODE_ENV = "development")) app.use(morgan("dev"));

//ROUTES
app.use("/", viewsRouter);

app.all("*", (req, res, next) => {
  next(new appError(`can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
