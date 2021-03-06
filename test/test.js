/*jslint node:true, nomen:true, unparam:true*/
/*global describe, it*/
'use strict';

var assert      = require('assert');
var should      = require('should');
var WordSuggest = require('../');
var dictionary  = require('../lib/dictionary');
var fixtures    = require('./fixtures');

describe('Word Suggest // Dependencies', function () {
    it('should load lo-RM dictionary', function () {
        assert.deepEqual(dictionary.get('lo-RM'), fixtures.dictionary);
    });

    it('should process a raw dictionary', function () {
        assert.deepEqual(dictionary.process('test/fixtures/dictionary.dic'), fixtures.dictionaryRaw);
    });

    it('should be able to use a custom dictionary (an array)', function () {
        assert.equal(2, new WordSuggest('____m', [ 'lorem', 'ipsum', 'sit' ]).results.length);
    });
});

describe('Word Suggest // Core', function () {
    it('should check if the word have underscores', function () {
        assert.equal('success', new WordSuggest('_orem', 'lo-RM').status);
        assert.equal('error',   new WordSuggest('lorem', 'lo-RM').status);
    });

    it('should return 5 alternatives', function () {
        assert.equal(5, new WordSuggest('_____', 'lo-RM').results.length);
    });

    it('should return an array with "lorem" as alternative', function () {
        assert.deepEqual([ 'lorem' ], new WordSuggest('lo_em', 'lo-RM').results);
    });

    it('should return an array with "dolor" and "lorem" as alternatives', function () {
        assert.deepEqual([ 'dolor', 'lorem' ], new WordSuggest('_o___', 'lo-RM').results);
    });
});
