const FULL = 360;
const HALF = 180;

/**
 * Calculate difference between 2 angles
 * @param {Number} ang1 first angle
 * @param {Number} ang2 first angle
 * @return {Number} difference
 * @link https://ru.hexlet.io/challenges/intro_to_programming_angle_difference
 */
export const diff = (ang1, ang2) => {
  const difference = Math.abs(ang1 - ang2);
  return difference > HALF ? FULL - difference : difference;
};
