const stringLength = require('./stringLength');

test('characters count, [1,2,3] to equal 3', () => {
  expect(stringLength([1,2,3])).toBe(3);
});