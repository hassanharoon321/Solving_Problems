//String => 5
//Hash Table => 0
//Two pointers => 1
//Math => 1
//Arrays => 4


function sortArrays(arr)
{
 
        let length = arr.length;
   
        for (let j = 0; j < length - 1; j++) {
            
            if (arr[j] > arr[j + 1]) {
   
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                j = -1;
            }
        }
   
        return arr;
}

let arr=[1, 2, 99, 9, 8,7, 6, 0, 5, 4, 3];

let ans = sortArrays(arr);
console.log(ans)