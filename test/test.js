/*jslint node:true, nomen:true, unparam:true*/
/*global describe, it*/
'use strict';

var assert      = require('assert');
var should      = require('should');
var wordSuggest = require('../');
var dictionary  = require('../lib/dictionary');

describe('Word Suggest', function () {
    it('should return a word with 5 letters', function () {
        assert.equal(5, wordSuggest.length);
    });

    it('should have at least lo-RM dictionary', function (done) {
        dictionary(function (err, results) {
            results.should.have.property('lo-RM');
            done();
        });
    });
});
