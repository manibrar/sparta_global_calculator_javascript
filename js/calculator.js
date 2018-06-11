  console.log("inside calculator");
do {

  var value1 = parseFloat(prompt('Please insert first number for calculation:'));
  var value2 = parseFloat(prompt('Please insert second number for calculation:'));
  var choice = (prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide'));
  if(choice == 'a'){
    alert(value1 + value2);
  }else if(choice == 's'){
    alert(value1 - value2);
  }else if(choice == 'm'){
    alert(value1*value2);
  }else if(choice == 'd'){
    alert(value1/value2);
  }else{
    alert(value1+value2)
  }
  var user = prompt('New calculation? (y) or Quit? (n)')
  if (user == 'y') {
    alert('New calculation loading')
  } else {
    alert('Thanks for using ManiCalc')
  }

} while (user == 'y');
