/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }

    let reverse = 0;
    let number = x;

    while (number !== 0){
        reverse = reverse*10 + number%10;
        number = Math.floor(number/10);
    }
    return reverse === x;
};