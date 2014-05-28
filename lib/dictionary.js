/*jslint node:true, nomen:true*/
'use strict';

var fs   = require('fs');
var path = require('path');
var _    = require('lodash');
var dir  = '../data/';

function readDictionary(file) {
    return require(path.join(dir, file));
}

function groupItems(file) {
    return _.groupBy(readDictionary(file), 'length');
}

module.exports = groupItems;