describe('factorial', function() {
  it('returns 1 for 0!', function() {
    expect(factorial(0)).to.eq(1);
  });

  it('returns full factorial for a given number', function() {
    expect(factorial(3)).to.eq(6);
  });
});
