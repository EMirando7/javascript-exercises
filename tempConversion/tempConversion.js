//formula (F − 32) × 5/9 = c

const ftoc = function(farenValue) {
  debugger;
  let c = (farenValue - 32) * (5/9);

  return c;
}
ftoc(32)



const ctof = function() {

}

module.exports = {
  ftoc,
  ctof
}
