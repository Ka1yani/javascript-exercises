const repeatString = function (text, numberOfrepeat) {
    if (numberOfrepeat >= 0) {
        let result = '';
        for (let i = 0; i < numberOfrepeat; i++) {
            result = text.concat(result);
        }
        return result;
    } else return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
