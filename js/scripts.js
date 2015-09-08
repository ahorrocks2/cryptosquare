var user_input = prompt("Enter a sentence");

var letterCount = function(x) {
  var array = x.toLowerCase().split("");
  return array.length;
};

var squareSize = function(x) {
  var root = 0;
  var rows = 0;
  var columns = 0;
  root = Math.sqrt(letterCount(x));

  if (Number.isInteger(root) === true) {
    var rows = root;
    var columns = root;
  } else {
    var rows = Math.round(root);
    var columns = rows + 1;
  };

  size = [rows,columns];
  return size;
};

console.log(squareSize("aaaaaaa"))



// d o n t c o m p a
// reyoursel
// ftoothers
// compareyo
// urselftot
// hepersony
// ouwereyes
// terday
