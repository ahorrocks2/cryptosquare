// describe('string', function( {
//   // it('downcases inputted string' {
//   //   expect("HELLO WORLD").to.eq("hello world");
//   // });
// });
describe('letterCount', function() {
  it('count how many letters are in the input string', function() {
    expect(letterCount('abc')).to.eq(3)
  });
});

describe('squareSize', function() {
  it('determine number of rows and columns needed', function() {
    expect(squareSize("abcdefghij")).to.eq([3,4])
  });
});
