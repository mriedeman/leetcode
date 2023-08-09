
function checkAnagrams(str1, str2){
    //The reason you need to use the join('') method after sorting is that the sort() method sorts the elements of
    // an array in place and returns the sorted array. However, when you compare two arrays using the === operator,
    // you're comparing their references in memory, not their contents.
    if (str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')){
        return true
    } return false
}

console.log(checkAnagrams('angel', 'glean'));