function list(numOne, numTwo) {
    let i = setInterval(() => {
      console.log(numOne++);
      if (numOne > numTwo) clearInterval(i);
    }, 1000)
  }
  
  list(5, 15);