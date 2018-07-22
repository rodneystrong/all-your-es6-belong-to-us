//shortcut for console.log();
function c(l) {
  console.log(l);
}

//the click handling part
//grab the element
//const theBox = document.querySelector('.box');

//console.log(theBox);

// //create the click event
// theBox.addEventListener('click', function() {
//   let opening = 'opening';
//   let open = 'open';

//   if (this.classList.contains(opening)) {
//     [opening, open] = [open, opening];
//   }

//   console.log(this);
//   this.classList.toggle(opening);
//   setTimeout(() => {
//     console.log(this);
//     this.classList.toggle(open);
//   }, 200);
// });

// const theBody = document.querySelector('body');

// theBody.addEventListener('click', function() {
//   let opening = 'opening';
//   let open = 'open';

//   if (theBox.classList.contains(opening)) {
//     [opening, open] = [open, opening];
//   }
//   theBox.classList.toggle(opening, open);
//   setTimeout(() => {
//     console.log(this);
//     this.classList.toggle(open, opening);
//   }, 200);
// });

const returnName = (dob, name = 'zaxch') => {
  //so the above arguments are saying: assign the properties 'dob'
  //'name' to the variable 'test'. is it implied that 'test' is
  //now an object?
  return name;
};
console.log(returnName('4/4', 'test', 'blah', 'bob'));

//or

const test = ({ name = 'zach', dob = 13, color = 'black' }) => {
  //in the above arguemnt, it's saying:
  console.log(dob);
  return dob * 12 + name + color;
};

console.log(test);

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
//const lis = Array.from(document.querySelectorAll('[data-time]'));

//filter for only li's that have 'flexbox' in them
// const filtered = lis
//   .filter(li => li.textContent.includes('Flexbox'))

//   //map down to list of time strings
//   .map(item => item.dataset.time)
//   //map to array of seconds
//   .map(time => {
//     //split in half, then parsefloat
//     const parts = time.split(':').map(part => parseFloat(part));
//     return parts[0] * 60 + parts[1];
//   })
//   //reduce to get total
//   .reduce((total, seconds) => total + seconds);
// console.table(filtered);

//console.log(filtered / 60 / 60);

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

//document.querySelector('.person-content').innerHTML = content;

//array of dogs and you wanna loop over and put each into an <li>
const doggies = [
  { name: 'zed', age: 3 },
  { name: 'cookie', age: 1 },
  { name: 'yolo', age: 13 },
  { name: 'lel', age: 8 },
];

const dogContent = `
  <ul>
    ${doggies
      .map(dog => `<li>${dog.name} is already ${dog.age}!</li>`)
      .join('')}
  </ul>
`;

//document.querySelector('.dog-content').innerHTML = dogContent;

//template strings with if else
const song = {
  name: 'My Myself and I',
  artist: 'g easy',
  featuring: 'bebe rhexa',
};
const songContent = `
  <div class="song">
    <p>
      ${song.name} — ${song.artist}
      ${song.featuring ? `(Featuring ${song.featuring})` : ''}
    </p>
  </div>
`;

//document.querySelector('.song-content').innerHTML = songContent;

//template strings with advanced nesting
const beer = {
  name: 'Belgian Wit',
  brewery: 'Steam Whistle Brewery',
  keywords: ['pale', 'cloudy', 'spiced', 'crisp'],
};
//put the keywords array into the content below
function renderBeers(keywords) {
  return `
    <ul>
      ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
    </ul>
  `;
}

const beerContent = `
  <div class="beer">
    <h2 contenteditable>${beer.name}</h2>
    <p>From ${beer.brewery}</p>
    ${renderBeers(beer.keywords)}
  </div>
`;

//document.querySelector('.beer-content').innerHTML = beerContent;

//es6 string methods
const es6Car = {
  make: 'bmw',
  model: 'm6',
  year: 2020,
};
//make them all right-aligned

function rightAlign(str, length = 20) {
  if (typeof str !== 'string') {
    str.toString();
  }
  return `-> ${' '.repeat(length - str.length)} ${str}`;
}

console.log(rightAlign(es6Car.make));
console.log(rightAlign(es6Car.model));
console.log(rightAlign(es6Car.year));

//destructuring objects
const { make, model, year } = es6Car;

console.log(make, model, year);

const dPerson = {
  hair: {
    type: {
      man: 'black',
      girl: 'white',
    },
  },
};

const { man, girl } = dPerson.hair.type;

const { make: amake, model: amodel } = es6Car;

//destructuring arrays
const deets = ['ale', 43, 'hey.com', 3434, 'another', 'lel'];

const [aperson, age, ...site] = deets;

//swap vars with destructuring
let first1 = 'number 1';
let second1 = 'number 2';
console.log(first1, second1);
[first1, second1] = [second1, first1];
console.log(first1, second1);

//destructuring and functions
function convertCurrency(amount) {
  const converted = {
    USD: amount * 0.76,
    GPB: amount * 0.53,
    AUD: amount * 1.01,
    MEX: amount * 13.3,
  };
  return converted;
}

const hundo = convertCurrency(100);
console.log(hundo);
//destructuring what you returned!
let desFunc = ({ USD: USS, GPB, AUD, MEX } = convertCurrency(100));
console.log(USS, AUD, GPB, MEX);

const kevin = 'kkears';

let thePhrase = 'my boy ' + kevin + " don't know shit";

console.log(thePhrase);

let newPhrase = `my boy ${kevin} is the shit`;

console.log(newPhrase);

//how to make the order of the arguments in a function not matter
//put the arguments in an object!
function tipCalc({ subtotal = 90, tip = 0.15, tax = 0.08 } = {}) {
  return subtotal + tax * subtotal + tip * subtotal;
}

console.log(tipCalc({ subtotal: 100, tax: 0.08 }));
console.log(tipCalc());

//for of loop. Used to loop over anything that is an iterable
const meats = ['flank', 'rib', 'breast', 'chuck'];
//.forEach you can't use a break or continue statement, in case you wanted to skip an item in the array
meats.forEach(meat => console.log(meat));

for (const meat of meats) {
  if (meat === 'rib') {
    continue;
  }
  console.log(`${meat} juicy`);
}

const stringTest = 'this yea';
for (const item of stringTest) {
  console.log(item);
}

const ps = document.querySelectorAll('p');
console.table(ps);

for (const para of ps) {
  para.addEventListener('click', function() {
    console.log(`you clicked this ${this.textContent}`);
  });
}

//practice for in loop over object properties + values
for (prop in es6Car) {
  console.log(prop);
  console.log(`the ${prop} is ${es6Car[prop]}`);
}

//Array.from() and Array.of()
const arrayPs = Array.from(ps, theP =>
  console.log(`Array.from ${theP.textContent}`)
);

//spread operator. spreads all the items in an iterable (array-like thing)
//into the containing array.
const allNames = [...names, ...fullNames];
console.log(allNames);

// const theSpread = document.querySelector('.jump');
// console.log(theSpread);
// const splitSpread = [...theSpread.textContent]
//   .map(letter => `<span>${letter.toUpperCase()}</span>`)
//   .join('');
// console.log(splitSpread);
// theSpread.innerHTML = splitSpread;

// const moreSpread = [...document.querySelectorAll('p')];
// console.log(moreSpread);

//grab the h2, split every letter in there, and then put those letters back into the HTML
// const theH2 = document.querySelector('.jump');

// const theH2text = theH2.textContent;
// console.log(' bleh h2text ' + theH2text);
// const splitH2 = [...theH2text].map(letter => `<span>${letter}</span>`).join('');
// console.log('splith2 ' + splitH2);
// theH2.innerHTML = splitH2;

//spreading into a function
const peeps = ['rach', 'alex', 'jared', 'zach'];

function whatsup(peeps) {
  console.log(`yoo ${peeps[0]} ${peeps[3]}`);
}

//Promises, API using fetch
//https://ghibliapi.herokuapp.com/films

const gibPromise = fetch('https://ghibliapi.herokuapp.com/people');
console.log(`my gibpromise ${gibPromise}`);

gibPromise
  .then(okok => okok.json())
  .then(okok => {
    console.log('we got our data ' + okok);
    console.table(okok);
    console.log(`name: ${okok[0].name} films: ${okok[0].films[0].title}`);
  })
  .catch(err => {
    console.log(' OH SHIT YOU GOT AN ' + err);
  });

const ghibfilm = fetch('https://ghibliapi.herokuapp.com/films').then(data =>
  data.json()
);
const ghibpeople = fetch('https://ghibliapi.herokuapp.com/people').then(data =>
  data.json()
);

// Promise.all([ghibfilm, ghibpeople]).then(values =>
//   // console.log(
//   //   `heeey we got ${values[0][0].title} with ${values[1][0].name} in it!`
//   // )
//   console.log(values[0], values[1][0])
// );
// .then(second1 => second1.json())
// .then((first1, second1) => console.log(first1[0].title + second1[0].name));

//object literals
let laptopHd = 4,
  laptopSize = 15,
  laptopBrand = 'dell',
  laptopRam = 32;
const laptop = {
  laptopHd,
  laptopSize,
  laptopBrand,
  laptopRam,
  showLaptop() {
    console.log(this.laptopRam);
  },
};

console.log(laptopBrand);

//making your own promise
const myProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('alex promise resolved');
  }, 2000);
});

myProm.then(data => {
  c(`console shortcut used ${data}`);
});

function getFilms(title) {
  return new Promise((resolve, reject) => {
    const ghibfilm2 = fetch('https://ghibliapi.herokuapp.com/films');
    if (ghibfilm2) {
      resolve(ghibfilm2);
    } else {
      reject(Error('no film here. rejected!'));
    }
  });
}

getFilms(data).then(console.log(`film name: ${data[0].name}`));
