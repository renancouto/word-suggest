/*jslint node:true, nomen:true, stupid:true*/
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

function processItem(item) {
    if (!isNaN(item)) {
        return false;
    }

    var slash = item.indexOf('/');

    if (slash !== -1) {
        item = item.substr(0, slash);
    }

    return item.toLowerCase();
}

function processRaw(file) {
    var contents  = fs.readFileSync(path.join(__dirname, '..', file), 'utf-8'),
        processed = [];

    contents.split('\n').forEach(function (item) {
        item = processItem(item);

        if (item) {
            processed.push(item);
        }
    });

    return processed;
}

module.exports = {
    get     : groupItems,
    process : processRaw
};