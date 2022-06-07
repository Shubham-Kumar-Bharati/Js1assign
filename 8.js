// Question No.8:-Shyam has got his marks in three subjects as A, B, and C (out of 100).Write a program to calculate his total marks and his average.

const Sum = (A, B, C) => 
{
 let result=(A+B+C);
 return(result);
};

const Average = (A, B, C) => 
{
 let result=(A+B+C)/3;
 return(result);
}
console.log(Sum(50,20,100));
console.log(Average(50,20,100));