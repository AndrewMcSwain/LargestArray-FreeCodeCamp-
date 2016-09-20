
function largestOfFour(arr) {
  // You can do this!
  var maxArray = [];
  var biggestInt;
  function findMax(arr){
    for(var i = 0; i < arr.length; i++){
      console.log(maxArray);
      for(var j = 0; j <= arr[i].length; j++){
        if (arr[i][j] === arr[i][0 ])  biggestInt = arr[i][j];
        if (arr[i][j] !== arr[i][0] && arr[i][j] >= biggestInt) biggestInt = arr[i][j];
        console.log(biggestInt);
      }
    maxArray.push(biggestInt);                    
    }
  }
  
  findMax(arr);
  return maxArray;
 }

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
