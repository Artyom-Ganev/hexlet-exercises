const MIN_LENGTH = 2;

/**
 * Check if string is palindrome
 * @param {String} str
 * @return {Boolean} check result
 */
const isPalindrome = (str) => {
    const length = str.length;
    if (length < MIN_LENGTH) {
        return true;
    }
    const end = length - 1;
    if (str[0] !== str[end]) {
        return false;
    }
    return isPalindrome(str.slice(1, end));
};
export default isPalindrome;
