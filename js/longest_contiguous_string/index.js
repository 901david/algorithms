const lcs = (str1, str2) => {
    const results = Array.from({ length: str1.length + 1 }, () => Array.from({ length: str2.length + 1 }).fill(0));

    for (let i = 1; i < str1.length + 1; i++) {
        for (let j = 1; j < str2.length + 1; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                results[i][j] = 1 + Math.max(results[i][j - 1], results[i - 1][j]);
            }
            else {
                results[i][j] = Math.max(results[i][j - 1], results[i - 1][j]);
            }
        }
    }
    results.map(r => console.log(r + "\n"))
    let i = str1.length;
    let j = str2.length;
    let lookingUp = false;
    const finalResults = [];
    while(i > 0 && j > 0) {
        if(results[i][j] > results[i][j - 1]){
            console.log("Looking across", results[i][j], results[i][j - 1]);
            lookingUp = true;
        }

        if(lookingUp) {
            console.log("Looking up", results[i][j], results[i - 1][j]);
            if(results[i][j] > results[i - 1][j]){
                lookingUp = false;
                console.log('FOUND MATCH', str2[j -1])
                finalResults.push(str2[j -1]);
            }
            i--;
        }
        else {
            j--;
        }


    }

    return finalResults.reverse();
}
const outerResults = lcs('XKYKZPW', 'ZXVVYZW');
console.log(outerResults)

module.exports = lcs;