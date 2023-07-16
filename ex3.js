function sum(num1, num2) {
    return function(examp) {
      return num1 + num2;
    };
  }
  
  const sumFunc = sum(5, 13);
  
  console.log(sumFunc());