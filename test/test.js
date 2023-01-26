'use strict';

const expect = require('chai').expect;
const { assert } = require('chai');
const evenOdd = require('../index');

describe('EvenOrOdd', ()=> {
    it('check if the number is even or odd', ()=> {
        const result = evenOdd(1);
        // expect(result).to.equal('odd');
        assert.equal(result, 'odd');
    });
    it('check if the number is even or odd', ()=> {
        const result = evenOdd(2);
        // expect(result).to.equal('odd');
        assert.equal(result, 'even');
    });
    it('check if the number is even or odd', ()=> {
        const result = evenOdd(3);
        // expect(result).to.equal('odd');
        assert.equal(result, 'odd');
    });
    it('check if the number is even or odd', ()=> {
        const result = evenOdd(4);
        // expect(result).to.equal('odd');
        assert.equal(result, 'even');
    });
    it('check if the number is even or odd', ()=> {
        const result = evenOdd(5);
        // expect(result).to.equal('odd');
        assert.equal(result, 'odd');
    });
    it('check if the number is even or odd', ()=> {
        const result = evenOdd(6);
        // expect(result).to.equal('odd');
        assert.equal(result, 'even');
    });
})

describe('not a valid number', ()=> {
    it('check if the number is valid', ()=> {
        const result = evenOdd('n');
        // expect(result).to.equal('odd');
        assert.equal(result, 'not a valid input');
    });
})