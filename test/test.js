var assert = require('assert');
var quipu = require('../dist/quipu.min');

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});

describe('isSame', function() {
    it('should return true when isSame, typeless', function() {
        assert.equal(quipu.isSame(1, "1"), true);
    });
});