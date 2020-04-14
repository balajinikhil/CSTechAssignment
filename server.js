process.on("uncaughtException", err => {
  console.log(err);
  process.exit(1);
});

const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env"
});

console.log(`NODE_ENV:`, process.env.NODE_ENV);

const mongoose = require("mongoose");

let DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("DB connected");
  });

const app = require("./app");
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Up and running ${PORT}`);
});

process.on("unhandledRejection", err => {
  console.log(err);

  server.close(() => {
    process.exit(1);
  });
});
