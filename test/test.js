/*jslint node:true*/
/*global describe, it*/
'use strict';

var assert      = require('assert');
var wordSuggest = require('../');

describe('Word Suggest', function () {
    it('should return a word with 5 letters', function () {
        assert.equal(5, wordSuggest.length);
    });
});
