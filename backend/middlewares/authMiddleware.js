module.exports = (req, res, next) => {
  console.log("Auth middleware");
  console.log(typeof someMiddleware);
  next();
};
