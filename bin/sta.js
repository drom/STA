#!/usr/bin/env node
'use strict';

var lib = require('../lib'),
    fs = require('fs-extra'),
    yargs = require('yargs'),
    onml = require('onml');

var argv = yargs.count('icestorm').argv;
var fileName;

if (argv._.length === 1) {
    fileName = argv._[0];
    fs.readJson(fileName, function (err, src) {
        if (argv.icestorm) {
            var src = lib.icestorm.import(src);
        }
        var res = lib.render(src);
        var svg = onml.s(res);
        console.log(svg);
    });
} else {
    console.log(argv);
}
