import { uniq } from 'lodash';

/**
 * Calculate arrays union
 * @param {Array} first array
 * @param {Array} rest arrays
 * @return {Array} union result
 * @link https://ru.hexlet.io/code_reviews/209060
 */
export default (first, ...rest) => uniq(first.concat(...rest));
