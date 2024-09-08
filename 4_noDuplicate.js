/**
 * array has some duplicate elements
 * ==> duplicate items eliminate korar simple way hosse ekta notun array nibo, existing array er elements gulo notun array te dibo jodi kono element age thekei notun array tay thake tahole o r oi element ta nibe na
 */

const briyaniKhor = ['abul', 'babul', 'kabul', 'dabul', 'abul', 'thabul', 'babu', 'dabul'];
const numbers = [1, 1, 45, 2, 4, 4, 40];

function noDupticate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDupticate(briyaniKhor);
const uniqueArray2 = noDupticate(numbers);
console.log(uniqueArray);
console.log(uniqueArray2);

