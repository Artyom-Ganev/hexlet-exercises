const normalizedSubstring = (str: string, start: number, count: number): string => {
  let result = '';
  for (let i = start; i < (start + count); i++) {
    result += str[i];
  }
  return result;
};

/**
 * Substring function implementation
 * @param {String} str source string
 * @param {Number} sourceIndex starting of substring
 * @param {Number} sourceLength substring length
 * @return {String} substring
 * @link https://ru.hexlet.io/code_reviews/123286#readme
 */
const substr = (str: string, sourceIndex: number = 0, sourceLength: number = str.length): string => {
  const strEnd = str.length - 1;
  const count = sourceLength < 0 ? 1 : sourceLength;
  const index = sourceIndex < 0 ? 0 : sourceIndex;

  if (count === 0 || (index > strEnd)) {
    return '';
  }

  if ((index + count) > strEnd) {
    return normalizedSubstring(str, index, str.length - index);
  }

  return normalizedSubstring(str, index, count);
};

export default substr;
