/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

const doubleOddNumbers = (arr) => {
    const oddArr = arr.filter((num) => {
        if (num%2 !==0) return num        	
    })
    return oddArr.map((num) => {
        return num*2;
    })
}

console.log(doubleOddNumbers([1,2,3,4,5]))
