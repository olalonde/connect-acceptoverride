var assert = require('assert')
  , connectAcceptOverride = require('./../index')

describe('Testing that the proper Accept header is being set if a .xml ' +
  'or .json extension is given at the end of a url.', function() {

  // Mocking up the request object
  var getReqObject = function() {
    var req = {'url': '', 'headers': {'accept':''}};
    return req;
  }
  var defaultURL = 'http://localhost:3000/test';

  it('Should set the Accept header to application/json', function() {

    var req = getReqObject();
    req.url = defaultURL + '.json';

    connectAcceptOverride()(req, '', function() {});
    assert.strictEqual(req.headers.accept, 'application/json');
  })
  
  it('Should set the Accept header to application/xml', function() {

    var req = getReqObject();
    req.url = defaultURL + '.xml';

    connectAcceptOverride()(req, '', function() {});
    assert.strictEqual(req.headers.accept, 'application/xml');
  })
  
  it('Should not change the Accept header', function() {

    var req = getReqObject();
    req.url = defaultURL;

    connectAcceptOverride()(req, '', function() {});
    assert.strictEqual(req.headers.accept, '');
  })
  
  it('Should not change the Accept header (even with weird url where .xml is ' +
    'put randomly in the url)', function() {

    var req = getReqObject();
    req.url = defaultURL + '/asdf.xmlaadsfadfsa';

    connectAcceptOverride()(req, '', function() {});
    assert.strictEqual(req.headers.accept, '');
  })
})
