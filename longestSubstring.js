//Given a string, find the longest substring without repeating characters.


//sliding window approach, use set for faster lookups
function findLongestSubstring(string){

   let set = new Set();
   let left = 0;
   let right = 0;
   let maxSubstring = '';

   while (right < string.length){
        if (!set.has(string[right])) {
            set.add(string[right]);
            right++;
        } else {
            set.delete(string[left])
            left++;
        }
        let currentSubstring = string.substring(left, right);
        if (currentSubstring.length > maxSubstring.length){
            maxSubstring = currentSubstring;
        }
   }

   return maxSubstring;
}
console.log(findLongestSubstring('a;sdlkjf;asdsdfsdljk'))