/**
 * @param {string} str
 * @return {number}
 */
var longestSubstringWithoutRepeatingChars = (str)=>{

    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (charSet.has(str[right])) {
            charSet.delete(str[left]);
            left++;
        }

        charSet.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}