// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

strCompression = str => {
  let string = str.split("")
  let count = 0
  let final = ''

  for(let i = 0; i < str.length; i++) {
    count++;
    console.log(str[i], str[i+1]);
    if(str[i] != str[i+1]) {

      final += str[i] + count
      count=0;
    }
  }
  return final

}

console.log(strCompression("aabcccccaaa"))
// a2blc5a3.
