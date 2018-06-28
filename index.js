//the click handling part
//grab the element
const theBox = document.querySelector('.box');

//create the click event
theBox.addEventListener('click', function() {
  let opening = 'opening';
  let open = 'open';

  if (this.classList.contains(opening)) {
    [opening, open] = [open, opening];
  }

  console.log(this);
  this.classList.toggle(opening);
  setTimeout(() => {
    console.log(this);
    this.classList.toggle(open);
  }, 200);
});

const returnName = (dob, name = 'zaxch') => {
  //so the above arguments are saying: assign the properties 'dob'
  //'name' to the variable 'test'. is it implied that 'test' is
  //now an object?
  return name;
};
returnName('4/4', 'test', 'blah', 'bob');
//or

const test = ({ name = 'zach', dob = 13, color = 'black' }) => {
  //in the above arguemnt, it's saying:
  return dob * 12 + name + color;
};

//test({ name: 'Test', dob: '4/4' })

test({ name: 'Bob' });
test({ name: 'n', color: 'hi' });
test({ color: 'n', name: 'hi' });

//template strings
// console.log(`
// this is a multi line template string with a variable ${test.name}
// `);

//make sense?

//testing temporal dead zone
//console.log(car);
//correctly getting 'car is not defined' reference error

//testing let declaration
let car = 'ford';

//let car = 'chevy';
//console.log(car);

//default function arguments
function calcBill(total, tax = 0.08, tip = 0.2) {
  return total + total * tax + total * tip;
}

let myBill = calcBill(60, 0.1, undefined);

//console.log(myBill);

//arrow functioooooons
let names = ['alex', 'rachel', 'kara', 'vic'];

//add 'kang' to all the names
let fullNames = names.map(name => `${name} kang`);

//console.table(fullNames);
//create the race
const race = 'spartan tahoe';
//create the racers
const racers = ['alex', 'cynthia', 'rachel', 'dindo'];
//map them out into an object with their place in the race

const results = racers.map((racer, i) => ({
  name: racer,
  race,
  place: i + 1,
}));

//console.table(results);

//filter out all the old people
const ages = [493, 34, 113, 89, 315, 5, 33, 7, 13, 755, 89];

const oldies = ages.filter(age => age > 60);

console.log(oldies);

//select all list items and convert to array
const lis = Array.from(document.querySelectorAll('[data-time]'));

//filter for only li's that have 'flexbox' in them
const filtered = lis
  .filter(li => li.textContent.includes('Flexbox'))

  //map down to list of time strings
  .map(item => item.dataset.time)
  //map to array of seconds
  .map(time => {
    //split in half, then parsefloat
    const parts = time.split(':').map(part => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  //reduce to get total
  .reduce((total, seconds) => total + seconds);
console.table(filtered);

console.log(filtered / 60 / 60);

//html in template strings
const person = {
  name: 'aleeex',
  city: 'NY',
  age: 30,
};

const content = `
  <div class="person">
    <h2>${person.name}</h2>
    <p>city: ${person.city}</p>
    <p>He's already ${person.age}</p>
  </div>
`;

document.querySelector('.content').innerHTML = content;

//array of dogs and you wanna loop over and put each into an <li>
const doggies = [
  { name: 'zed', age: 3 },
  { name: 'cookie', age: 1 },
  { name: 'yolo', age: 13 },
  { name: 'lel', age: 8 },
];

const dogContent = `
  <ul>
    ${doggies.map(dog => `<li>${dog.name} is already ${dog.age}!</li>`)}
  </ul>
`;

document.querySelector('.content').innerHTML = dogContent;
