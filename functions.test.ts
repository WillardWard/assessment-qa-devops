const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const testArr = [1, 2 ,3];
    test('return an array', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr));
    })

    test('return same length array', () => {
        expect(shuffleArray(testArr)).toHaveLength(testArr.length);
    })
});