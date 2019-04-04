// Assume you have a method isSubstringwhich checks if one word is a substring
// of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
// call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

const isSubstring = (str1, str2) => {

  if(str1.length != str2.length) return false

  if(!str1 || !str2) return false;

  let s1 = str1+str1;

  return (s1).includes(str2)

}

console.log(isSubstring("waterbottle", "erbottlewat"));
console.log(isSubstring("waterbottle", "brbottlewat"));
