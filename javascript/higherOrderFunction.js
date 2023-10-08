/* 
Ex7: 
Use forEach to  Return all the names in the array  
[“Rawan", "Jafar", "Hind", "Muhammad", "Esraa", “Dareen”] using loops. 
*/

// let names = ["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"]
// names.forEach ((el) => {
//   console.log(el)
// })

/* 
Ex8: 
Project an array of series into an array of {id, title} pairs using forEach()
*/

// let newSeries = [
//   {
//     id: 70111470,
//     title: "Die Hard",
//     boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 654356453,
//     title: "Bad Boys",
//     boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
//   {
//     id: 65432445,
//     title: "The Chamber",
//     boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 675465,
//     title: "Fracture",
//     boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
// ];

// newSeries.forEach ((el) => {
//   console.log(`${el.id}, \n \n ${el.title}`)
// })

/* 
Ex 9: 
Use map() now to implement the same previous functionality
*/

// let newSeries = [
//   {
//     id: 70111470,
//     title: "Die Hard",
//     boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 654356453,
//     title: "Bad Boys",
//     boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
//   {
//     id: 65432445,
//     title: "The Chamber",
//     boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 675465,
//     title: "Fracture",
//     boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
// ];

// newSeries.map((el) => {
//   console.log(`${el.id} \n \n ${el.title}`)
// })

/* 
Ex 10: 
Use filter() to return the series with a rating under 5
*/

// let newSeries = [
//   {
//     id: 70111470,
//     title: "Die Hard",
//     boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 654356453,
//     title: "Bad Boys",
//     boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
//   {
//     id: 65432445,
//     title: "The Chamber",
//     boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 675465,
//     title: "Fracture",
//     boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
// ];

// newSeries.filter((el) => {
//   el.rating < 5 ? console.log(el) : "";
// });

/* 
Ex 11: 
Use reduce()  function to return the longest string in an array of strings.
["Java", "JavaScript", "Python", "C++", "PHP"]
*/

// let languges = ["Java", "JavaScript", "Python", "C++", "PHP"]
// console.log(languges.reduce((acc, el) => {
//   return acc.length > el.length ? acc : el
// }))

/* 
Ex 12: 
Create a function displayName that, given the pokemon data, below, 
uses reduce to return an array containing the names of the characters.
*/

// let pokemonData = [
//   {
//     game_index: 76,
//     version: {
//       name: "red",
//       url: "https://pokeapi.co/api/v2/version/1/",
//     },
//   },
//   {
//     game_index: 76,
//     version: {
//       name: "blue",
//       url: "https://pokeapi.co/api/v2/version/2/",
//     },
//   },
//   {
//     game_index: 76,
//     version: {
//       name: "yellow",
//       url: "https://pokeapi.co/api/v2/version/3/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "gold",
//       url: "https://pokeapi.co/api/v2/version/4/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "silver",
//       url: "https://pokeapi.co/api/v2/version/5/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "crystal",
//       url: "https://pokeapi.co/api/v2/version/6/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "ruby",
//       url: "https://pokeapi.co/api/v2/version/7/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "sapphire",
//       url: "https://pokeapi.co/api/v2/version/8/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "emerald",
//       url: "https://pokeapi.co/api/v2/version/9/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "firered",
//       url: "https://pokeapi.co/api/v2/version/10/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "leafgreen",
//       url: "https://pokeapi.co/api/v2/version/11/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "diamond",
//       url: "https://pokeapi.co/api/v2/version/12/",
//     },
//   },
// ];

// function displayName(array) {
//   let names = [];
//   array.reduce((acc, el) => {
//     names.push(el.version.name);
//   }, "");
//   return console.log(names);
// }

// displayName(pokemonData);

/* 
Ex13: 
What is the output of the following JS code segments? and Why?
*/

// var employee = {
//   firstName: "Rawan",
//   sayHi: function () {
//     console.log("Hi Coach ! " + this.firstName);
//   },
// };

// employee.sayHi(); // Hi Coach ! Rawan

// because => this reference to employee object

// var employee = {
//   firstName: "Rawan",
//   info: {
//     hasCar: true,
//     hasPet: true,
//   },
//   printInfo: function () {
//     console.log("Car owner? " + this.hasCar);
//   },
// };

// employee.printInfo(); // Car owner? undefined

/* 
because => this reference to employee object 
not info object It should be this.info.hasCar 
*/

// var employee = {
//   firstName: "Rawan",
//   info: {
//     hasCar: true,
//     hasPet: true,
//     printAddress: function () {
//       return this.data.address;
//     },
//     data: {
//       address: "Zarqa",
//     },
//   },
// };

// employee.info.printAddress() // Zarqa

/* 
because => this reference to info object 
not employee object this.data.address => Zarqa
*/
