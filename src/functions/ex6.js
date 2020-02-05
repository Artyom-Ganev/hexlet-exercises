/**
 * Return string characters in reversed order
 * @param {String} text source string
 * @return {String} result string
 * @link https://ru.hexlet.io/code_reviews/209146
 */
export default (text) => {
  const takeLast = (str, count) => {
    if (!str || str.length < count) {
      return null;
    }
    return str
      .slice(-count)
      .split('')
      .reverse()
      .join('');
  };
  return takeLast(text, 4);
};
