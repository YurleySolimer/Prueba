/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

const removeVowels = (str) => {
  var strArr = str.split("")
  for (let i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase()
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      strArr[i] = ""
    }
  }
  return strArr.join("").toLowerCase()
};


console.log(removeVowels("TIM"))
