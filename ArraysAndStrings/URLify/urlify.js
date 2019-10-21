// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)

URLifyv1 = str => {
  let string = str.trim();
  console.log(string);
  return string.replace(/\s/g, "%20");
};

console.log(URLifyv1("Mr John Smith ", 13));

let str = "Mr John Smith  ";

URLifyv2 = string => {
  let url = "";
  for (let i = 0; i < string.trim().length; i++) {
    if (string[i] === " ") {
      url += "%20";
    } else {
      url += string[i];
    }
  }
  return [url, str];
};

console.log(URLifyv2(str));
