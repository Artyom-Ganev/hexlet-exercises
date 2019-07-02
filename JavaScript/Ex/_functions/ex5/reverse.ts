/**
 * String reverse
 * @param {String} str source string
 * @return {String} reversed string
 * @link https://ru.hexlet.io/code_reviews/123301#readme
 */
export default (str: string): string => {
  const lastIndex = str.length - 1;
  const iter = (index, acc) => {
    if (index > lastIndex) {
      return acc;
    }
    return iter(index + 1, str[index] + acc);
  };
  return iter(0, '');
};
