const number = 2;

describe('my first test', () => {
  test('test: is 2', () => {
    expect(number).toBe(2);
  });

  it('it: is 2', () => {
    expect(number).toBe(2);
  });
});
