module.exports = function (req, res, next) {
  if (req.url.match(/\.json$/)) {
    // url ends with json
    req.headers.accept = 'application/json';
  };
  next();
}
