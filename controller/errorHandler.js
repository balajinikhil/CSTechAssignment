const devError = (err, res) => {
  statusCode = err.statusCode || 500;
  status = err.status || "Error";

  res.status(statusCode).json({
    status: status,
    message: err.message,
    err
  });
};

module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV === "development") devError(err, res);
};
