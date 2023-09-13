//Given two arrays, write a function to compute their intersection. Each element in the result must be unique.
//Each element in the result must be unique.
//The result can be in any order.
function findIntersection(nums1, nums2){
    const intersection = []

    for (let num of nums1){
        if (nums2.includes(num)){
            intersection.push(num)
        }
    }

    const set = new Set(intersection)

    return [...set]

}

console.log(findIntersection([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(findIntersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]


//optimize the solution for lookups, includes is O(n)
function findIntersection2(nums1, nums2){
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const intersection = []

    for (let num of set1){
        if (set2.has(num)){
            intersection.push(num)
        }
    }

    return intersection;

}

console.log(findIntersection2([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(findIntersection2([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]