function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);

    let resultStr = '';
    if (a > 10) {
        resultStr += 'a is bigger than 10 ';
    } else {
        resultStr += 'a is less than or equal to 10 ';
        if (a === 5) {
            resultStr += 'an example of a special case ';
        }
    }
    if (a !== 15) {
        resultStr += 'but a is not 15 ';
    }
    if (a > 5) {
        resultStr += 'and a is greater than 5 ';
    } else {
        resultStr += 'and a is less than or equal to 5 ';
    }
    if (a % 2) {
        resultStr += 'and a is odd';
    } else {
        resultStr += 'and a is even';
    }

    return resultStr;
}

console.log(manyChecks());
