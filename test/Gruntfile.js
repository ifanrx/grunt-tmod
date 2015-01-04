/*
 * grunt-tmod
 * https://github.com/jsonzhang/grunt-tmodjs
 *
 * Copyright (c) 2013 Json
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){

    grunt.initConfig({
        tmod: {
            options: {
                "output": "./dist",
                "charset": "utf-8",
                "syntax": "native",
                "escape": true,
                "engine": false,
                "alias": null,
                "minify": false,
                "type": "amd",
                base: './tpl/' // template('tpl/index/main') >>> template('index/main')
            },
            dev: {
                options: {
                    "minify": false
                }
            },
            dist: {
                options: {
                    "minify": true
                }
            }
        }
    });


    //grunt.loadNpmTasks('grunt-tmod');
    require('../tasks/tmod.js')(grunt);

    grunt.registerTask('default', ['tmod']);

};