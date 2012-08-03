/*
 * jquery.ncookie
 * https://github.com/nak0yui/jquery.ncookie.js
 *
 * Copyright (c) 2012 nak0yui
 * Licensed under the MIT, GPL licenses.
 */

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
