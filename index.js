//String => 5
//Hash Table => 0
//Two pointers => 1
//Math => 1
//Arrays => 4
//REcusrion => 

function countDown (n){
  for(let i=n; i>0; i--){
    console.log(i);
  }
  console.log("hello");
}
countDown(3)

function CountDownRecursive(n){
  if(n<=0){
    console.log("hello");
    return;
  }
  console.log(n);
  CountDownRecursive(n-1)
} 

CountDownRecursive(3)
