/**
 * String reverse
 * @param {String} str source string
 * @return {String} reversed string
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
