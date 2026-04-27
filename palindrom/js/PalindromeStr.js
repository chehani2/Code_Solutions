/**
 * @param {number} str
 * @return {boolean}
 */
var isPalindrome = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = str.length - 1;

    while (str.length - 1) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

};