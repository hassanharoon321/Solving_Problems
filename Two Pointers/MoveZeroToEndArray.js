// two pointer problem 
//move all zero at the end of array
const nums = [0,1,0,3,12];

let pos = 0;
for(let i=0; i<nums.length; i++){
  if(nums[i]!==0){
    nums[pos++] = nums[i];
  }
}

for(i=pos; i<nums.length; i++){
  nums[i]=0;
}

console.log(nums)