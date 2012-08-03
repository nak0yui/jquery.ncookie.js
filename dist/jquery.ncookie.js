/*! jQuery nCookie - v0.1.0 - 2012-08-08
* https://github.com/nak0yui/jquery.ncookie.js
* Copyright (c) 2012 nak0yui; Licensed MIT, GPL */

(function($, document) {
  'use strict';
  
  var
  defaultOptions = {
    expires: 1,
    path: '/'
  },
  
  setCookie = function(key, value, options) {
    var opt = {}, cookie = [];
    $.inflate(opt, defaultOptions, options);
    if (key === null || typeof key === 'undefined') {
      return;
    }
    if (value === null || typeof value === 'undefined') {
      value = '';
      opt.expires = -1;
    }

    if (typeof opt.expires === 'number') {
      var days = opt.expires;
      opt.expires = new Date();
      opt.expires.setTime(opt.expires.getTime() + days * 24 * 60 * 60 * 1000);
    }
    
    cookie.push(encodeURIComponent(key) + '=' + value);
    cookie.push('expires=' + opt.expires.toUTCString());
    cookie.push('path=' + opt.path);
    
    document.cookie = cookie.join('; ');
  },
  getCookie = function(key) {
    var vals = document.cookie.split('; ');
    for (var i = 0; i < vals.length; i++) {
      var val = vals[i].split('=');
      if (decodeURIComponent(val[0]) === key) {
        return val[1];
      }
    }
    return null;
  },
  destoryCookie = function(key) {
    setCookie(key);
  },
  ncookie = {
    set: setCookie,
    get: getCookie,
    destory: destoryCookie
  };
  
  // nCookie
  $.ncookie = ncookie;
  
}(window.jQuery, document));

/*! jQuery plugin jquery.inflate.js - v0.1.0 - 2012-08-03
* https://github.com/nak0yui/jquery.inflate.js
* Copyright (c) 2012 nak0yui; Licensed MIT, GPL */

(function($) {
  'use strict';
  
  var copyInherit = function(args) {
    var target = args[0] || {},
        length = args.length,
        options = args,
        i, src, name, copy, clone;
    if (typeof target !== 'object') {
      target = {};
    }
    for (i = 1; i < length; i++) {
      for (name in options[i]) {
        src = target[name];
        copy = options[i][name];
        target[name] = copy;
      }
    }
    return target;
  };
  
  // Static method.
  $.inflate = function() {
    return copyInherit(arguments);
  };
  
}(window.jQuery));
