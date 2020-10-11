//divisible by 4
//not divisible by 100, unless divisible by 400
//
const leapYears = function(year) {
    if(year % 100 == 0){
        if(year % 400 == 0 ){
            return true
        }
        return false;
    }

    if(year % 4 == 0 ){
        return true;
    }
    
    return false;   
}
module.exports = leapYears
