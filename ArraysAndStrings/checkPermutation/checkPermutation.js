// Given two strings, write a method to decide if one is a permutation of the other.

permutation = (str1, str2) => {
  let s1 = str1.toLowerCase()
  let s2 = str2.toLowerCase()

  buildMap = str => {
    let obj = {}
    for(let char of str) {
      obj[char] = (obj[char] || 0) + 1
    }
    return obj
  }

const termOne = buildMap(s1);
const termTwp = buildMap(s2)
// console.log(termOne, termTwp);


  for(let keys in termOne) {
    if(termOne[keys] !== termTwp[keys]) {
      return false
    }
  }
  return true
}

p1 = (str1, str2) => {
  let s1 = str1.toLowerCase().split("").sort()
  let s2 = str2.toLowerCase().split("").sort()
  console.log(s1, s2);

  for(let i = 0; i < s1.length; i++ ) {
    if(s1[i] !== s2[i]) {
      return false
    }
  }
  return true
}

console.log(permutation("Hello", "Elloh"))
console.log(permutation("Hello", "Ellph"))

console.log(p1("Hello", "Elloh"))
console.log(p1("Hello", "Ellph"))
