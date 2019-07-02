const MIN_LENGTH = 2;

/**
 * Check if string is palindrome
 * @param {String} str
 * @return {Boolean} check result
 * @link https://ru.hexlet.io/code_reviews/123049#readme
 */
const isPalindrome = (str: string): boolean => {
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
