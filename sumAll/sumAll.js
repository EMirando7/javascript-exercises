const sumAll = function(num1, num2) {
    debugger;
    let counter = num1;
    let newNum = num1;
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
sumAll(123,1)
module.exports = sumAll
