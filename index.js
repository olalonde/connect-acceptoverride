var url = require('url');

module.exports = function() {
  return function (req, res, next) {
    var _acceptParam = req.param('_accept');
    if (_acceptParam) {
      req.headers.accept = _acceptParam;
    }
    else if (url.parse(req.url).pathname.match(/\.json$/)) {
      req.headers.accept = 'application/json';
    }
    else if (url.parse(req.url).pathname.match(/\.xml$/)) {
      req.headers.accept = 'application/xml';
    }
    next();
  };
}
