const sumAll = function(a, b) {
    let result = 0;
    if(a >= 0 && b>=0 && typeof(a) === 'number' && typeof(b) === 'number') {
        for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
            result += i;
        }
        return result;
    }
    else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
