// 1. Strings!

// Consider the following string:

let myString = "hello,this,is,a,difficult,to,read,sentence";

// 1.1 Add the string to your file and log it.

console.log(myString);

// 1.2 Log the length of myString.

console.log(myString.length);

// 1.3 The commas make that the sentence is quite hard to read. 
// Find a way to remove the commas from the string and replace them with spaces.

myString=myString.replace(\, ," ");

// 1.4 Log myString to see if you succeeded.

console.log(myString);

// 2. Arrays!

// Consider the following array:

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

// 2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.

favoriteAnimals.push("turtle");

// 2.2 Log your new array!

console.log(favoriteAnimals);

// 2.3 Now add Jim's favorite animal to the array, it's 'meerkat', 
// but make sure it will be placed after 'blowfish' and before 'capricorn'.

favoriteAnimals.splice(1,"meerkat");

// 2.4 Write a console.log statement that explains in words you think the new value of the array is.

console.log("New value of the array is: "+favoriteAnimals.values);

// 2.5 Log your new array!

console.log(favoriteAnimals);

// 2.6 Log the length of the array, add a message: 'The array has a length of: ' 
// (here you should show the length of the array).

console.log("The array has a length of: "+favoriteAnimals.length);

// 2.7 Jason does not like 'giraffe', delete this animal from the array.

favoriteAnimals.unshift ("giraffe");

// 2.8 Again log your new array.

console.log(favoriteAnimals);

// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, 
// but you don't know the position or the index of the item in the array, how can you find it?

favoriteAnimals.unshift("meerkat");

// 2.10 Log the index of 'meerkat'. Add a message so it says: 
// 'The item you are looking for is at index: ' (here you should show the index of the item).

const indexNumber = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " + indexNumber);

// More JavaScript 🎉

// Create a function that takes 3 arguments and returns the sum of the these arguments.

function sum(var1, var2, var3) {
    var result=var1+var2+var3;
    return result;
}

// Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
    var result = color;
    return " a " + result + " car";
  }
  var carColor = colorCar("red");
  console.log(carColor);

Create an object and a function that takes the object as 
a parameter and prints out all of its properties and values.

var object = [
    {obj1: "qwe",}
    {obj2: "asd",}
    {obj3: "zxc",}
];
  function showIt(obj) {
      for (let i = 0; i < object.length; i++) {
          console.log(obj[i]);
      }
  }

// Create a function named vehicleType that receives a color, 
// and a code, 1 for car, 2 for motorbike. 
// And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code) {
    if (code === 1) {
        console.log(color + " car");
      } else if (code === 2) {
        console.log(color + " motorbike");
      }
}
    vehicleType("blue", 2);

// Can you write the following without the if statement, but with just as a single line with console.log(...);?
/*
if (3 === 3) {
    console.log("yes")
} else {
    console.log("no")
} */

console.log([3 === 3], "yes" || "no");

// Create a function called vehicle, like before, 
// but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
    if (code == 1 && age >= 1) {
        console.log("a " + color + " used car");
      }
    }
    vehicle("blue", 1, 5);

// Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

vehicles=["car", "motorbike", "caravan", "bike"];

// How do you get the third element from that list?

console.log(vehicles[2]);

// Change the function vehicle to use the list of question 7. 
// So that vehicle("green", 3, 1) prints "a green new bike".

function vehicle(color, code, age) {
    if (code == 3 && age <= 1) {
        console.log("a " + color + " new bike");
      }
    }
    vehicle("green", 3, 1);

// Use the list of vehicles to write an advertisement. 
// So that it prints something like: 
// "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

let vehicles = ["motorbikes", "caravans", "bikes"];
function advertise(vehicleType) {
  for (let i = 0; i < vehicleType.length; i++) {
    console.log(
      "Amazing Joe's Garage, we service cars, " +
        vehicleType[i] +
        ", " +
        vehicleType[i + 1] +
        " and " +
        vehicleType[i + 2] +
        "."
    );
    break;
  }
}
    advertise(vehicles);

// Hint, the output should be correct English with all the punctuation in place 
// (that's the challenge). So plurals for the vehicle types, 
// commas followed by a single space, the word and to replace the final 
// comma and closed off by a period.
// What if you add one more vehicle to the list, 
// can you have that added to the advertisement without changing the code for question 10?

// Create an empty object.

let object = {};

// Create an object that contains the teachers that you have had so far for the different modules.
// Add a property to the object you just created that contains the languages that they have taught you.

let teachers = [
    {name: "Zohir", languages: "Git"},
    {name: "Abed", languages: "HTML-CSS"},
    {name: "Vadim", languages: "Javascript"},
    {name: "Jonas", languages: "Javascript"}
];
console.log(
    "Teacher's name: " +
      teachers[0].name +
      " " +
      "Languages: " +
      " " +
      teachers[1].languages
  );

  for (let i = 0; i < teachers.length; i++) {
    console.log(teachers[i]);
  }

// Write some code to test two arrays for equality using == and ===. Test the following:

    // let x = [1,2,3];
    // let y = [1,2,3];
    // let z = y;
// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
//???????
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
switch (x,y,z) {
    case x==y:
        console.log("true");
        break;
    case x===y: 
        console.log("true");
        break;
    case z==y:
        console.log("true");
        break;
    case z==x:
        console.log("true");
        break;        
    default:
        break;
}

// Don't cheat! Seriously - try it first.
// Check out this Fiddle. You need to open your browser’s 
// Developer Tools to see the console output. 
// Press the Run button in the upper right corner to run the code.

// More insights from this Stack Overflow question.

// Take a look at the following code:

//      let o1 = { foo: 'bar' };
//      let o2 = { foo: 'bar' };
//      let o3 = o2;
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
let o2 = { foo: 'bar1'};
console.log(o3);

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

// What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;
// First it takes the type of 42 as 'number' then it takes the type of 'number' as 'string'.

// ‘Coerce' means to try to change - so coercing var x = '6' 
// to number means trying to change the type to number temporarily.

let x = 6;
typeof typeof x;
console.log(typeof typeof x); // String!