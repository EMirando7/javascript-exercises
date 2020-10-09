const removeFromArray = function(arr, ...nums) {
    // debugger; [1, 2, 3]
    for( let counter = nums.length; counter > 0  ;counter --) {
        let currentNum = nums.shift();
        if(currentNum !== undefined && arr.includes(currentNum)){
                arr.splice(arr.indexOf(currentNum), 1);
        }
    }
    return arr;
}
// removeFromArray([1,2,3],1,2,3)

module.exports = removeFromArray