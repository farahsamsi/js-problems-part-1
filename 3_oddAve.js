/**
 * function takes an array as parameter
 * get the average of the odd numbers in the array
 */


// put odd numbers in an array

function oddAve(numbers) {
    let sum = 0;
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            // console.log(number);
            odds.push(number);
        }
    }
    console.log(odds);
    for(const odd of odds){
        sum = sum + odd;
    }
    let result = sum / odds.length;
    console.log(sum, odds.length);
    return result;
}

const numbers = [42, 13, 58, 65, 81, 79, 101, 22, 23];
const avg = oddAve(numbers);
console.log('average of the odd numbers is : ', avg);