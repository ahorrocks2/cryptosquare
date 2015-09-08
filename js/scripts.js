
var number = parseInt(prompt("Enter a number"));

var factorial = function(n) {
  if (n === 0) {
    return 1
  } else {
    result = 1;
    for (i = 1; i <= n; i++)
      result *= i;
  }

  return result;
}

document.write(factorial(number));


// for (i = 1; i <= number; i++)
//   result =
//   result *= i



//
// $(function() {
//   $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if(!result) {
//       $(".not").text("not");
//     } else {
//       $(".not").text("");
//     }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
