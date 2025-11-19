// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 
function twoSum( nums , target ){

    // Plan
    // 1.Initialize a map.
    // 2.Loop through the nums using a while loop
    // 3.Check if the current num[i] is already in map
    // 4.If num[i] is in map return the index in map and curent index
    // 5.If noot calculate the complement
    // 6.Seet the complement as the key and the value as the index

    if( nums === null || nums.length < 1 || target === null ){
        return[]
    }

    let index =  0
    const map = new Map()

    while( index < nums.length){

        console.log("index", index, nums[index], "mapp", map )
        console.log("mppp", map.get(nums[index]))

        // if( map.get( nums[index] ) !== undefined ){

        //     console.log("hello", map.get( nums[index] ) )
        //     return [ map.get( nums[index] ), index ]

        // }

        if( map.has( nums[index] )  ){

            console.log("hello", map.get( nums[index] ) )
            return [ map.get( nums[index] ), index ]

        }

        const complement = target - nums[index]
        map.set( complement , index )

        index += 1

    }

    return []

}

// console.log( "hello", twoSum() )
console.log("2",  twoSum( [2,7,11,15], 9 ) )
