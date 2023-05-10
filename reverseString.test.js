const reverseString = require('./reverseString.js');

test('case 1, "testing" to equal gnitset', () => {
  let testString = 'testing'; 
  let expected = 'gnitset';
  
  let result = reverseString(testString);

  expect(result).toBe(expected);
});
