/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery.ncookie');

  test('is ncookie', 1, function() {
    ok(typeof $.ncookie === 'object', 'should be return object');
  });
  
  test('set and get cookie', 1, function() {
    var key = 'foo',
        val = 'bar';
    $.ncookie.set(key, val);
    equal($.ncookie.get(key), val, 'should be equal cookie value');
  });
  
  test('set null cookie', 1, function() {
    var key = 'foo',
        val = 'bar';
    $.ncookie.set(key, val);
    $.ncookie.set(key);
    equal($.ncookie.get(key), null, 'should be delete foo cookie');
  });
  
  test('get null key', 2, function() {
    equal($.ncookie.get(null), null, 'should return null value');
    equal($.ncookie.get(), null, 'should return null value');
  });
  
  test('destory cookie', 1, function() {
    var key = 'foo',
        val = 'bar';
    $.ncookie.set(key, val);
    $.ncookie.destory(key);
    equal($.ncookie.get(key), null, 'should be delete foo cookie');
  });
  
  test('set cookie to expired yesterday cookie', 1, function() {
    var key = 'foo',
        val = 'bar',
        options = {
          expires: -1
        };
    $.ncookie.set(key, val, options);
    equal($.ncookie.get(key), null, 'must not be get cookie');
  });
}(jQuery));
