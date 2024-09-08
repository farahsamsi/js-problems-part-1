/**
 * SIMPLE LOGIC (not 100% accurate)
 * leap year is divisible by 4
 */

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const year = isLeapYear(2023);
// console.log(year);



/**
 * year not divisible by 100
 * year divisible by 4
 */

function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const year2 = isLeapYear2(2023);
const year3 = isLeapYear2(2400);
console.log(year2);
console.log(year3);