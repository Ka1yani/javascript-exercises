const getTheTitles = function(inputArr) {
    //console.log(inputArr[0].title);
    let books = [];
    inputArr.forEach( item => books.push(item.title) );
    return books;
};

// Do not edit below this line
module.exports = getTheTitles;
