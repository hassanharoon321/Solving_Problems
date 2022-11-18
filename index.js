//solving ugly problems

//2,3,5 are positive where you divide it by these numbers and //answer is 1 so return true else false

// 6 => ( 6 / 2 ) = 3 => ( 3 / 3 ) = 1 => return true 
// 11 => ( 11 / 2 ) = not divisble  => return false 

//hint https://www.youtube.com/watch?v=5bM0BHgetEs&feature=emb_imp_woyt

const isUglyNumber = (num) => {
  if(num<=0) return false;
  while(num%2==0){
    num/=2;
  }
  while(num%3==0){
    num/=3
  }
  while(num%5==0){
    num/=5
  }
  return num===1;
}

let someValue = isUglyNumber(0);

console.log(someValue)

