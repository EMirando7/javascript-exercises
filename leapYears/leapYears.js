//divisible by 4
//not divisible by 100, unless divisible by 400
//
const leapYears = function(year) {
    return year % 4 == 0 ? true : false
}

module.exports = leapYears
