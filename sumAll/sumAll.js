const sumAll = function(num1, num2) {
    let counter = num1;
    let newNum = num1;
    if(num1 < 0 || num2 < 0 || typeof(num1) !== 'number' || typeof(num2) !== 'number' ){
        return 'ERROR'
    }
    if(num1 < num2){
        while (counter < num2) {
            counter++
            newNum += counter;
        }
    }
    if(num1 > num2)
    while (counter > num2) {
        counter--
        newNum += counter;
    }
    return newNum;
}

module.exports = sumAll
