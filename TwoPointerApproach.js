// here we discuss two pointer approch

const nums = [0, 1, 0, 3, 13];

//first sort an array

const sortedNums = nums.sort((a, b) => a - b);

let someVal = [];
for(let i=0 ; i<sortedNums.length; i++){
  for(let j = i+1; j<sortedNums.length; j++){
    if(i===j){
      continue;
    }else if(sortedNums[i] + sortedNums[j] === 16){
      someVal = [i,j];
    }else{
      someVal
    }
  }
}

console.log(someVal);