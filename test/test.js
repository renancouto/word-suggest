/*jslint node:true, nomen:true, unparam:true*/
/*global describe, it*/
'use strict';

var assert      = require('assert');
var should      = require('should');
var wordSuggest = require('../');
var dictionary  = require('../lib/dictionary');
var fixtures    = require('./fixtures');

describe('Word Suggest', function () {
    it('should load lo-RM dictionary', function () {
        assert.deepEqual(dictionary('lo-RM'), fixtures.dictionary);
    });

    it('should return a word with 5 letters', function () {
        assert.equal(5, wordSuggest('lorem', 'lo-RM').length);
    });

    it('should check if the word has underscores', function () {
        assert.equal(true, wordSuggest('lo_em', 'lo-RM'));
    });
});
