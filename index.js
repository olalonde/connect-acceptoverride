var url = require('url');

module.exports = function() {
  return function (req, res, next) {
    if (url.parse(req.url).pathname.match(/\.json$/)) {
      // url ends with json
      req.headers.accept = 'application/json';
    };
    next();
  };
}
