import { diff } from '../../intro/challanges';

test('diff', () => {
  expect(diff(0, 0)).toBe(0);
  expect(diff(0, 90)).toBe(90);
  expect(diff(0, 180)).toBe(180);
  expect(diff(0, 190)).toBe(170);
  expect(diff(225, 0)).toBe(135);
  expect(diff(0, 225)).toBe(135);
  expect(diff(300, 45)).toBe(105);
  expect(diff(45, 300)).toBe(105);
  expect(diff(240, 300)).toBe(60);
  expect(diff(120, 30)).toBe(90);
});
