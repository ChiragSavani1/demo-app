const { add, subtract, multiply, divide } = require('./calculator');

test('adds 10 + 5 to equal 15', () => {
    expect(add(10, 5)).toBe(15);
});

test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
