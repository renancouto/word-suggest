/*jslint node:true, nomen:true*/
'use strict';

var fs   = require('fs');
var path = require('path');
var dir  = '../data/';

function getFilenames(next) {
    fs.readdir(path.resolve(__dirname, '../data/'), function (err, files) {
        return next(err, files);
    });
}

function getDictionaryName(file) {
    var index = file.lastIndexOf('.');
    return file.substr(0, index);
}

function readDictionaries(next) {
    var dictionary = {};

    getFilenames(function (err, files) {
        if (err) {
            return next(err);
        }

        files.forEach(function (file) {
            dictionary[getDictionaryName(file)] = require(path.join(dir, file));
        });

        return next(null, dictionary);
    });
}

module.exports = readDictionaries;