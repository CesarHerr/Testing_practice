const calculator = require('./calculator.js');

// Sum test
describe('Sum Great Calculator', () => {
  let calc;

  beforeEach(() => {
  calc = new calculator();
  });

  test('Case Sum 2 + 5', () =>{
    let a = 2;
    let b = 5;
    let expected = 7;

    let result = calc.sum(a, b);
    expect(result).toBe(expected);
  }); 

  test('Case Sum 8 + 5', () =>{
    let a = 8;
    let b = 5;
    let expected = 13;

    let result = calc.sum(a, b);
    expect(result).toBe(expected);
  });

  test('Case Sum 20 + 5', () =>{
    let a = 20;
    let b = 5;
    let expected = 25;

    let result = calc.sum(a, b);
    expect(result).toBe(expected);
  });
});

// Subtract test
describe('Subtract Great Calculator', () => {
  let calc = 0;

  beforeEach(() => {
  calc = new calculator();
  });

  test('Case subtraction 2 - 5', () =>{
    let a = 2;
    let b = 5;
    let expected = -3;

    let result = calc.subtract(a, b);
    expect(result).toBe(expected);
  });
  
  test('Case subtraction 12 - 5', () =>{
    let a = 12;
    let b = 5;
    let expected = 7;

    let result = calc.subtract(a, b);
    expect(result).toBe(expected);
  });

  test('Case subtraction 20 - 5', () =>{
    let a = 20;
    let b = 5;
    let expected = 15;

    let result = calc.subtract(a, b);
    expect(result).toBe(expected);
  });
});

// Divide test
describe('Divide Great Calculator', () => {
  let calc = 0;

  beforeEach(() => {
  calc = new calculator();
  });

  test('Case divide 12 / 3', () =>{
    let a = 12;
    let b = 3;
    let expected = 4;
    let result = calc.divide(a, b);
    expect(result).toBe(expected);
  });
  
  test('Case divide 15 / 3', () =>{
    let a = 15;
    let b = 3;
    let expected = 5;

    let result = calc.divide(a, b);
    expect(result).toBe(expected);
  });

  test('Case divide 18 / 3', () =>{
    let a = 18;
    let b = 3;
    let expected = 6;

    let result = calc.divide(a, b);
    expect(result).toBe(expected);
  });
});  

  // Multiply test
describe('Multiply Great Calculator', () => {
  let calc = 0;

  beforeEach(() => {
  calc = new calculator();
  });

  test('Case Multiply 2 * 5', () =>{
    let a = 2;
    let b = 5;
    let expected = 10;
    let result = calc.multiply(a, b);
    expect(result).toBe(expected);
  });
  
  test('Case Multiply 20 * 5', () =>{
    let a = 20;
    let b = 5;
    let expected = 100;

    let result = calc.multiply(a, b);
    expect(result).toBe(expected);
  });

  test('Case Multiply 10 * 5', () =>{
    let a = 10;
    let b = 5;
    let expected = 50;

    let result = calc.multiply(a, b);
    expect(result).toBe(expected);
  });
});
