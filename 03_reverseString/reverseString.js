const reverseString = function(text) {
    let revString = ''; 
    for(let i = text.length -1; i >=0; i--){  
        revString += text.charAt(i);
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;