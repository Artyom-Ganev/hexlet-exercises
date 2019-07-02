/**
 * Applies function to arguments multiple times
 * @param {Number} count how much times to apply
 * @param {Function} func a function to apply
 * @param {*} arg function arguments
 * @link https://ru.hexlet.io/code_reviews/123292#readme
 */
const apply = (count: number, func: Function, arg: any) => {
  if (count === 0) {
    return arg;
  }
  return apply(count - 1, func, func(arg));
};
export default apply;
