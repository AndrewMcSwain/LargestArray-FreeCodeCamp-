
function repeatStringNumTimes(str, num) {
  // repeat after me
  var counter = 0;
  var repeatStr = str;    
  if (num < 0)repeatStr = "";
  while (counter < num && num !==0){
    repeatStr += str;
    counter++;
  }

  return repeatStr;
}

repeatStringNumTimes("*", 3);
