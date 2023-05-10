const capitalized = require('./capitalized.js');

describe('first character capitalized',() => {

  test('cas 1', () => {
    let string = 'microverse';
    let expected = 'Microverse'
    
    let result = capitalized(string);
    expect(result).toBe(expected);
    
  });

});