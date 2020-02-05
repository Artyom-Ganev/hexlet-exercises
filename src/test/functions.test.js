import union from '../functions/ex5';
import run from '../functions/ex6';

describe('JS:Functions', () => {
  test('EX5:union', () => {
    expect(union([])).toEqual([]);
    expect(union([], [])).toEqual([]);
    expect(union([], [], [])).toEqual([]);

    expect(union([3])).toEqual([3]);
    expect(union([3, 2], [2, 2, 1])).toEqual([3, 2, 1]);
    expect(union(['a', 3, false], [true, false, 3], [false, 5, 8])).toEqual(['a', 3, false, true, 5, 8]);
  });

  test('EX6:strings test', () => {
    expect(run('')).toBeNull();
    expect(run('cb')).toBeNull();
    expect(run('power')).toBe('rewo');
    expect(run('kids')).toBe('sdik');
    expect(run('hexlet')).toBe('telx');
  });
});
