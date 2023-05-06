// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let reverse = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }
//     return reverse;
// }

//3.solution
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
 }

//2.solution
// function reverse(str) {
//    let reversed = '';

//    for (let character of str) {
//     reversed = character + reversed;
//    }
//    return reversed
// }

//1.solution
// function reverse(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('');
// }

module.exports = reverse;
// console.log(reverse('hello'));