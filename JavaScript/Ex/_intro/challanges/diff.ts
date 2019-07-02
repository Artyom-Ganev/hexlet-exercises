const FULL = 360;
const HALF = 180;

/**
 * Calculate difference between 2 angles
 * @param {Number} ang1 first angle
 * @param {Number} ang2 first angle
 * @return {Number} difference
 * @link https://ru.hexlet.io/code_reviews/123956#readme
 */
export default (ang1: number, ang2: number): number => {
    if (ang1 === ang2) {
        return 0;
    }
    const difference = Math.abs(ang1 - ang2);
    return difference > HALF ? FULL - difference : difference;
};
