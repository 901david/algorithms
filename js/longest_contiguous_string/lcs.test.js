const lcs = require('./index');

describe('Longest Contiguous Sequence with max sum', () => {
    test('should return correct value', () => {
        expect(lcs('XKYKZPW', 'ZXVVYZW')).toEqual('XYZW');
    })
})