const lcs = (str1, str2) => {
    // const results = Array.from({ length: str1.length }, (_, idx) => [str1[idx - 1] || 0].concat(Array.from({ length: str2.length }).fill(0)));
    const results = Array.from({ length: str1.length }, () => Array.from({ length: str2.length }).fill(0));

    for (let i = 1; i < str1.length; i++) {
        for (let j = 1; j < str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                results[i][j] = 1 + Math.max(results[i][j - 1], results[i - 1][j]);
            }
            else {
                results[i][j] = Math.max(results[i][j - 1], results[i - 1][j]);
            }
        }
    }

    return results;
    return [[0].concat(str2.split('')), ...results];
}
const outerResults = lcs('XKYKZPW', 'ZXVVYZW');
outerResults.map(r => console.log(r + "\n"))

module.exports = lcs;