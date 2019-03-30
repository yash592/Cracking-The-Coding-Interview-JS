// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures

function isUnique(str) {
  for(let i = 0; i < str.length; i++) {
    for(let j = i+1; j < str.length; j++) {
      if(str[i] === str[j]) {
        return false
      }
    }
  }
  return true
}

isUniq = str => {
  let obj = {}
  for(let chars of str) {
    obj[chars] = (obj[chars] || 0) + 1;
  }

  // console.log(Object.values(obj))
  let cals = Object.values(obj)
  return cals.every(el => el < 2)

}

console.log(isUnique('rpoiytr'))
console.log(isUnique('rpoiyt'))
console.log(isUniq('rpoiytr'))
console.log(isUniq('rpoiyt'))
