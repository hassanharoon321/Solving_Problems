var restoreString = function(s, indices) {
   let res = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        res[indices[i]] = s[i];
    }
    
    return res.join('');
};

const some = restoreString("codeleet",[4,5,6,7,0,2,1,3])

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.