const square = (num) => num * num;

/**
 * Calculate difference between square of sum of first n (@see n) natural numbers
 * and sum of squares of those numbers
 * @param {Number} n amount of natural numbers to sum
 * @return {Number} difference
 * @link https://ru.hexlet.io/code_reviews/123974#readme
 */
export default (n: number): number => {
    let sum = 0;
    let squareSum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        squareSum += square(i);
    }
    return square(sum) - squareSum;
};
