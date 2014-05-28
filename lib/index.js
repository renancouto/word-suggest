/*jslint node:true, nomen:true*/
'use strict';

var _            = require('lodash');
var dictionaries = require('./dictionary');

function getDictionary(language) {
    return dictionaries(language);
}

function find(word, language) {
    var dictionary = getDictionary(language);
    return word;
}

module.exports = find;
