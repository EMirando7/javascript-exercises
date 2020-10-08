const removeFromArray = function(arr, ...nums) {
    for(let i = 0 ; i < arr.length;i ++) {
        //i can access each individual num from nums

        let currentNum = nums.shift();
        if(currentNum !== undefined){
        arr.splice(arr.indexOf(currentNum), 1);
        }
    }
    
    return arr;
    }
module.exports = removeFromArray
