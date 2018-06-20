const returnName = (dob, name = 'zaxch') => {
  //so the above arguments are saying: assign the properties 'dob' 
  //'name' to the variable 'test'. is it implied that 'test' is 
  //now an object?
  return name
}
returnName('4/4', 'test', 'blah', 'bob')
//or

const test = ({ name = 'zach', dob = 13, color = 'black' }) => {

  //in the above arguemnt, it's saying: 
  return dob * 12 + name + color;
}

//test({ name: 'Test', dob: '4/4' })

test({ name: 'Bob' });
test({ name: 'n', color: 'hi' });
test({ color: 'n', name: 'hi' });

//template strings

//make sense?