/**
 * converting unit
 * 12inch = 1feet
 */

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const manHeight = inchToFeet(75);
// console.log('inch to feet1:', manHeight);


// 75 inch = 6ft 3inch
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result =feetNumber + 'ft' + inchRemaining + 'inch';
    return result;
}
const manHeight2 = inchToFeet2(75);
const manHeight3 = inchToFeet2(89);
// console.log('inch to feet2:', manHeight2);
// console.log('inch to feet2:', manHeight3);


