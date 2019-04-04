
var twoSum = function(nums, target) {
    let numObj = {}
    for(let i = 0; i < nums.length; i++) {

      let tgt = target-nums[i]

      if(Object.values(numObj).indexOf(tgt) > -1) {
        return [Object.values(numObj).indexOf(tgt), i]
      } else {
        numObj[i] = nums[i]
      }
    }

  }



console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,7,11,15], 26))



// numObj = {
//   0: "1"
// }
