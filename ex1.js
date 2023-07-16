function evenOdd(){
    let arr = [2, 5, 0 ,9, 15, 0, 10, "vlad" , NaN, 0, 4, 0, null];
  let sumOdd = 0;
  let sumPar = 0;
  let zeroNums = 0;
  let sumNulls = 0;
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumPar++;
      } else {
        sumOdd++;
      }
    if (arr[i] === 0){
      zeroNums++;
      sumPar--;
    } 
    if (arr[i] === null){
        sumNulls++;
    
    }
}
    console.log("Нечет : " + sumOdd);
    console.log("Чет : " + sumPar);
    console.log("Количество нулей: " + zeroNums );
    console.log("Количество элементов Null: " + sumNulls );

  }
  
evenOdd()