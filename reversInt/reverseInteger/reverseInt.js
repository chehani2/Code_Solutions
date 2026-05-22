/**
 * @param {number} x
 * @return {number} y
 */

var ReverseInt = (x) => {
    let number = x;

    const sign = x < 0 ? -1 : 1;
    const reversed = Math.abs(x).toString().split('').reverse().join('');
    const result = sign * reversed;

    const MAX = Math.pow(2, 31) - 1;   //  2147483647
    const MIN = Math.pow(-2, 31);       // -2147483648

    if (result > MAX || result < MIN) return 0;
    return result;
}