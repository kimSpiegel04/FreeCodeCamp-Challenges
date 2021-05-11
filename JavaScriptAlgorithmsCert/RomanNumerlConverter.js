//Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
// convertToRoman(2) should return the string II.
// convertToRoman(3999) should return the string MMMCMXCIX

function convertToRoman(num) {
  const numArr = [];
  const onesArr = [];
  const tensArr = [];
  const hundsArr = [];
  const thousArr = [];
  const concat = (...arrays) => [].concat(...arrays.filter(Array.isArray));
  let thous;
  let hunds;
  let tens;
  let ones;

  const numString = num.toString();
  for(var i=0; i<numString.length; i++){
    numArr.push(parseInt(numString[i]));
  }

  if(num>=1000){
    thous = numArr[0];
    hunds = numArr[1];
    tens = numArr[2];
    ones = numArr[3];
  } else if (num>=100){
    hunds = numArr[0];
    tens = numArr[1];
    ones = numArr[2];
  } else if (num>=10){
    tens = numArr[0];
    ones = numArr[1];
  } else if (num>=1){
    ones = numArr[0];
  }


  //ONE
  if(ones==9){
    onesArr.push("X");
    ones = 10-ones;
    onesArr.unshift("I".repeat(ones));
  } else if(ones>4){
    onesArr.push("V");
    ones = ones-5;
    onesArr.push("I".repeat(ones));
  } else if(ones==4) {
    onesArr.push("IV");
  } else {
    onesArr.push("I".repeat(ones));
  }

  //TEN
  if(tens==9){
    tensArr.push('XC');
  } else if(tens>4) {
    tensArr.push('L');
    tens = tens-5;
    tensArr.push('X'.repeat(tens));
  } else if(tens==4){
    tensArr.push('XL');
  } else {
    tensArr.push('X'.repeat(tens));
  }

  //HUNDREDS
  if(hunds==9){
    hundsArr.push('CM');
  } else if(hunds>4) {
    hundsArr.push('D');
    hunds = hunds-5;
    hundsArr.push('C'.repeat(hunds));
  } else if(hunds==4){
    hundsArr.push('CD');
  } else {
    hundsArr.push('C'.repeat(hunds));
  }

  //HUNDREDS
  if(thous<=4){
    thousArr.push('M'.repeat(thous));
  }

  return concat(thousArr, hundsArr, tensArr, onesArr).join('');

}
