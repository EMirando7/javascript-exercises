const sumAll = function(num1, num2) {
    let counter = num1;
    let newNum = num1;
    while (counter < num2) {
        counter++
        newNum += counter;
    }
    return newNum;
}

module.exports = sumAll
