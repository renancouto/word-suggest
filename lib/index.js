/*jslint node:true, nomen:true*/
'use strict';

var _          = require('lodash');
var dictionary = require('./dictionary');

// Private
function getDictionary(language) {
    return dictionary.get(language);
}

function toArray(word) {
    return word.split('');
}

function matchWord(word) {
    var candidate  = toArray(word),
        applicable = true,
        index      = 0,
        total      = candidate.length,
        current;

    for (index; index < total; index += 1) {
        current = this.word[index];

        if (current !== '_' && current !== candidate[index]) {
            applicable = false;
            break;
        }
    }

    if (applicable) {
        this.results.push(word);
    }
}

// Class
function WordSuggest(word, language) {
    this.word     = word;
    this.language = language;

    return this.find();
}

WordSuggest.prototype.find = function () {
    if (this.word.indexOf('_') === -1) {
        return {
            status  : 'error',
            message : 'Bad word'
        };
    }

    this.word    = toArray(this.word);
    this.results = [];

    if (!this.dictionary) {
        this.dictionary = getDictionary(this.language)[this.word.length];
    }

    this.dictionary.forEach(matchWord.bind(this));

    return {
        status  : 'success',
        results : this.results
    };
};

module.exports = WordSuggest;
