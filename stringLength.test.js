const stringLength = require('./stringLength');


test('case 1, characters count, "testing" to equal 3', () => {
  let testString = 'testing'; 
  let expected = 7;
  
  let result = stringLength(testString);

  expect(result).toBe(expected);
});

test('case 2, characters count, " " to equal 3', () => {
  let testString = ''; 
  expect(() => stringLength()).toThrow(Error);
});

test('case 3, characters count, "paralelepipedo" to equal 3', () => {
  let testString = 'paralelepipedo'; 
  expect(() => stringLength()).toThrow(Error);
});