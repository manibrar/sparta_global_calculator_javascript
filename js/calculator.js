  console.log("inside calculator");

  var x = 0;

  do {

    var ctr_array = (x, y);
    var y = ++x;


    var value1 = parseFloat(prompt('Please insert first number for calculation:'));
    var choice = (prompt('Choose your action Add(+), Minus(-) Multiply(*) Divide(/)'));
    var value2 = parseFloat(prompt('Please insert second number for calculation:'));
    if (choice == '+') {
      alert("your answer was " + (value1 + value2));
      console.log("your answer was " + (value1 + value2));
    } else if (choice == '-') {
      alert("your answer was " + (value1 - value2));
      console.log("your answer was " + (value1 - value2));
    } else if (choice == '*') {
      alert("your answer was " + (value1 * value2));
      console.log("your answer was " + (value1 - value2));
    } else if (choice == '/') {
      alert("your answer was " + (value1 / value2));
      console.log("your answer was " + (value1 / value2));
    } else {
      alert("your answer was " + (value1 + value2));
      console.log("your answer was " + (value1 + value2));
    }
    var user = prompt('New calculation? (y) or Quit? (n)')
    if (user == 'n') {
      alert('Thanks for using ManiCalc');
    } else {
      console.log("end of session " + x)
    }
    var x = y;

  } while (user == 'y');
