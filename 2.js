// Question No.2:- You are given two number first as A and second as B and check if both conditions (A<10and>B) are satisfied or not with the help of operators.

const Is_Valid = (a,b) => {
    if(a<10&&a>b){
      return true;
    }
    else{
      return false;
    }
  }
  console.log(Is_Valid(5,3));