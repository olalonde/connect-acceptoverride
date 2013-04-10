var url = require('url');

module.exports = function() {
  return function (req, res, next) {
    if (url.parse(req.url).pathname.match(/\.json$/)) {
      req.headers.accept = 'application/json';
    }
    else if (url.parse(req.url).pathname.match(/\.xml$/)) {
      req.headers.accept = 'application/xml';
    }
    next();
  };
}
