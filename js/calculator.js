  var x = 0;

  do {

    var ctr_array = (x, y);
    var y = ++x;
    console.log("ManiCalc Prompt Calculator Session " + x);

    var value1 = parseFloat(prompt('Please insert first number for calculation:'));
    var choice = (prompt('Choose your action Add(+), Minus(-) Multiply(*) Divide(/)'));
    var value2 = parseFloat(prompt('Please insert second number for calculation:'));
    console.log(value1, choice, value2);
    if (choice == '+') {
      alert("your answer was " + (value1 + value2));
      console.log("The answer is " + (value1 + value2));
    } else if (choice == '-') {
      alert("your answer was " + (value1 - value2));
      console.log("The answer is " + (value1 - value2));
    } else if (choice == '*') {
      alert("your answer was " + (value1 * value2));
      console.log("The answer is " + (value1 - value2));
    } else if (choice == '/') {
      alert("your answer was " + (value1 / value2));
      console.log("The answer is " + (value1 / value2));
    } else {
      alert("your answer was " + (value1 + value2));
      console.log("The answer is " + (value1 + value2));
    }
    console.log("end of session " + x)
    var user = prompt('New calculation? (y) or Quit? (n)')
    if (user == 'n') {
      alert('Thanks for using ManiCalc');
    } else {

    }
    var x = y;


  } while (user != 'n');
