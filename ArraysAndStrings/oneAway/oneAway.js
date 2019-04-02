//
// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// // one edit (or zero edits) away.

oneAway = (str1, str2) => {
  if(str1.length > str2.length+1) return false
  let missing = 0;
  if(str1.length===str2.length) {
    for(i=j=0; i < str1.length && j < str2.length; i++, j++) {
      // console.log(str1[i], str2[j]);
      if(str1[i] != str2[j]) {
        missing++
      }
    }
    if(missing === 1) {return true} else {return false}
  } else if(str1.length === str2.length+1) {
    for(i=j=0; i < str1.length, j < str2.length; i++, j++) {
      // console.log(str1[i], /str2[j]);
      if(str1[i] != str2[j]) {
        missing++;
        j--;
      }
    }
    if(missing === 1) {return true} else {return false}
  }
}

console.log(oneAway("pale", "ple"))
console.log(oneAway("pales", "pale"))
console.log(oneAway("pale", "bale"))
// console.log(oneAway("pale", "bae"))
