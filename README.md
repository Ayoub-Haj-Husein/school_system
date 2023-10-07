# school_system
### Ther are three js pages 
   * task =>  You have to read all the data that the user will fill the form with after the submission and display it in a new row (so you have to create a row for each student using dom manipulation ) then 
              append it to the table that we have in the html => (app.js page)
   * task =>  You will refactor the render function to render each student information in a separate card in the home page as shown in the image. Note that you will use images for the students in the assets 
              directory. Add all the students in an array and save it to the local storage. => (cards.js page)
   * task =>  Higher Order functions. => (HigherOrderFunctions.js page)
####Problem domain : 
You are building a School system for a school, where they can organize their students with their information and filter them.
Requirements :
create an index.html , app.js and style.css files   
In the html page you have to create :
   - Header with a nav bar (add fake pages for now in the nav) 
   - main which will contain two parts 
               1- Form 
                     Full name, Date of birth, gender, phone number, grade. 
               2- Table 
                    You will fill this from with the students information form in the js 
  - footer 
Your site should be styled properly and it should be responsive 
In the js file : 
 You have to read all the data that the user will fill the form with after the submission and display it in a new row (so you have to create a row for each student using dom manipulation ) then append it to the table that we have in the html

then =>
You will create a constructor to generate a student object which will be rendered in the main section instead of the table  from your app.js file. As follows:

Full name,
Date of birth,
Gender,
Major: 
Administration
IT
Science
Art
Image URL,
Phone number

You will refactor the render function to render each student information in a separate card in the home page as shown in the image. Note that you will use images for the students in the assets directory.
Add all the students in an array and save it to the local storage.

Higher Order functions => 

Ex7: Use forEach to  Return all the names in the array  [“Rawan", "Jafar", "Hind", "Muhammad", "Esraa", “Dareen”] using loops.
Ex8: Project an array of series into an array of {id, title} pairs using forEach()
A projection is a process of applying a function to an existing value to produce a new value.
function() {
	let newSeries = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		         ],
		
                 }
Ex 9: Use map() now to implement the same previous functionality
Ex 10: Use filter() to return the series with a rating under 5 
Ex 11: Use reduce()  function to return the longest string in an array of strings.
["Java", "JavaScript", "Python", "C++", "PHP"]
Ex 12: Create a function displayName that, given the pokemon data, below, uses reduce to return an array containing the names of the characters.
let pokemonData =[
    {
      "game_index": 76,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }]
Ex13: What is the output of the following JS code segments? and Why?
a) var employee = {
    firstName: 'Rawan',
    sayHi: function(){
        console.log("Hi Coach ! " + this.firstName);
    }
}
employee.sayHi() // ?
b) var employee = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true
    },
    printInfo: function(){
        console.log("Car owner? " + this.hasCar);
    }
}

employee.printInfo() // ?
c) var employee = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true,
        printAddress: function(){
            return this.data.address;
        },
        data: {
            address: "Zarqa"
        }
    },
}
employee.info.printAddress() // ?
