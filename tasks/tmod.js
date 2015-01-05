/*
 * grunt-tmod
 * base on Json's https://github.com/jsonzhang/grunt-tmodjs
 *
 * @author jfxiao07
 *
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var fs = require('fs');
var TmodJS = require("tmodjs");

module.exports = function(grunt) {

  grunt.registerMultiTask('tmod', 'the grunt plugin for tmodjs', function() {

    var options = this.options();
    var base = path.resolve(options.base || './');

    if (!fs.existsSync(base)) {
      grunt.fail.warn('`options.base` is not a directory');
    }

    // console.log(options)
    // return
    TmodJS.init(base, options);
    TmodJS.compile();

    // watch not supportted yet.
    return
    if(options.watch) {
      TmodJS.watch()
    }

  });
};