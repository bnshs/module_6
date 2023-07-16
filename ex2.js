function number(n) {

    if (n===1)  {
      return console.log('Один не является простым числом');
    }
     else if(n === 0){
       return console.log('Ноль не является простым числом')
     }
     else if(n < 0){
      return console.log('Не является простым числом')
      }
    else if(n >= 1000){
      return console.log('Данные неверны')
    }
    else if(n === 2)  {
      return console.log('Является простым числом');
    } else   {
      for(let i = 2; i < n; i++)  {
        if(n % i === 0) {
          return console.log('Не является простым числом');
        }
      }
      return console.log('Является простым числом');  
    }
  }
  
  number(41)