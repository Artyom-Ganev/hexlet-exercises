/**
 * Check if number if perfect
 * @param {Number} num source number
 * @return {Boolean} true if the number is perfect, else false
 * @link https://ru.hexlet.io/code_reviews/123316#readme
 */
export default (num: number): boolean => {
    if (num <= 0) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i < num; i += 1) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
};
