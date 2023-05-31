'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} at ${address}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};

// Property names

const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property values

const values = Object.values(openingHours);
console.log(...values);

// Entire object

Object.entries(openingHours);
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burzki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Wtsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4.0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
// optional chaining

// console.log(restaurant.openingHours.fri?.open);
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we open at ${open}`);
// }

// // Methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// // Arrays

// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// console.log(users[0]?.name ?? 'User array empty');

// rest operator
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'asadada',
//   mainIndex: 2,
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// const { menu = [], starterMenu: starters = [] } = restaurant;

// const {
//   fri: { open: o, close: c },
// } = openingHours;

// let [main, , secondary] = restaurant.categories;

// [main, secondary] = [secondary, main];
// console.log(restaurant.order(2, 0));
// // nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;

// //default values

// const [p, q, r] = [8, 9];

// // destructuring
// const arr = [7, 8, 9];
// console.log(...arr);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // copy array & join
// const mainMenuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // const ingredients = [
//   prompt('let`s make pasta! Ingredient 1?'),
//   prompt('let`s make pasta! Ingredient 2?'),
//   prompt('let`s make pasta! Ingredient 3?'),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// // and assignment operator

// rest2.owner = rest2.owner && '<ANONYMUS>';
// rest1.owner &&= '<ANONYMUS>';
// // nullish assignment operator
// rest1.numGuests ??= 10;

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// for (const item of menu.entries()) {
//   console.log(item);
// }
