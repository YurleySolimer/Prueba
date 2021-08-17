/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 
Examples:
    function isEven(val){
        return val % 2 === 0;
    }
    var arr = [1,2,3,4,5,6,7,8];
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

const partition = (arr, callback) => {
  return arr.reduce(
    (result, value, i) => {
      callback(value, i, arr)
        ? result[0].push(value)
        : result[1].push(value)

      return result;
    },
    [[], []]
  )
}

function isEven(val) {
  return val % 2 === 0;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(partition(arr, isEven));

function isLongerThanThreeCharacters(val) {
  return val.length > 3;
}
var names = ["Elie", "Colt", "Tim", "Matt"];
console.log(partition(names, isLongerThanThreeCharacters));
