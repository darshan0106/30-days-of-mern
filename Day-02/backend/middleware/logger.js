const logger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} - ${Date.now()}`);
  return next();
};
module.exports = logger;
