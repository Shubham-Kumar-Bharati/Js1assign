// Question no.4:-You are provided a four digit number N only. Your task is to print out the first digit of that number.


First_Digit = (n) => {
    while(n>=10){
    n =Math.floor(n/10);
  }
  return (n);
  
 }
 console.log(First_Digit(4567));