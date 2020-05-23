const calculator = require('./calculator'); // Arrange

describe('add operation', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3); // Act and Assert
  });

  test('adds 5 + 5 to equal 10', () => {
    const value = calculator.add(5, 5); // Act

    expect(value).toBe(10); // Assert
  });
});

describe('subtract operation', () => {
  test('subtracts 5 - 5 to equal 0', () => {
    const value = calculator.subtract(5, 5); // Act

    expect(value).toBe(0); // Assert
  });

  test('subtracts 3 - 2 to equal 1', () => {
    const value = calculator.subtract(3, 2); // Act

    expect(value).toBe(1); // Assert
  });
});
