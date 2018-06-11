  console.log("inside calculator");
do {

  var value1 = parseFloat(prompt('Please insert first number for calculation:'));
  var choice = (prompt('Choose your action Add(+), Minus(-) Multiply(*) Divide(/)'));
  var value2 = parseFloat(prompt('Please insert second number for calculation:'));
  if(choice == '+'){
    alert("your answer was " + (value1 + value2));
  }else if(choice == '-'){
    alert("your answer was " + (value1 - value2));
  }else if(choice == '*'){
    alert("your answer was " + (value1*value2));
  }else if(choice == '/'){
    alert("your answer was " + (value1/value2));
  }else{
    alert("your answer was " + (value1+value2));
  }
  var user = prompt('New calculation? (y) or Quit? (n)')
  if (user == 'y') {
    alert('New calculation loading')
  } else {
    alert('Thanks for using ManiCalc')
  }

} while (user == 'y');
