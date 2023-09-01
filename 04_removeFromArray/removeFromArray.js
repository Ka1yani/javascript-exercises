const removeFromArray = function(){
    let argumentArray = Array.from(arguments);
    let inputArray = argumentArray.shift();
    argumentArray.forEach( item => {
        if(inputArray.includes(item))
            inputArray.splice(inputArray.indexOf(item), 1);
    })
    return inputArray;
};
// Do not edit below this line
module.exports = removeFromArray;
