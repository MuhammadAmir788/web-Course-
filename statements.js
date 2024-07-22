// Basic If-Else statement-----------------

let age = 18;
if (age >= 18) {
  console.log("You are an adult."); //if condition will be true this block will execute first
} else {
  console.log("You are a minor."); //if the condition will false this block will execute first
}

//Nested-if---------

let age1 = 25;
let hasID = true;

if (age1 >= 18) {
  if (hasID) {
    //if here condition will true the compiler will enter in below block
    console.log("You can enter the club.");
  } else {
    //if the statement will false the compiler will direct move in "ELSE" part

    //you can skip ELSE part from this "Nested-if" condition
    console.log("You need an ID to enter the club.");
  }
} else {
  console.log("You are too young to enter the club.");
}

//Multiple-if--------

let score = 75;

if (score >= 90) {
  //(the compiler test all the IF statements in this condition)

  console.log("You got an A.");
}
if (score >= 80) {
  console.log("You got a B.");
}
if (score >= 70) {
  console.log("You got a C.");
}
if (score >= 60) {
  console.log("You got a D.");
} else {
  //(You can skip this "ELSE" Part in this Multiple-if statement)
  console.log("You got an F.");
}

//if-else-if-----(In this statement if a single condition become true from top the compiler will skip all other condition and the compiler move to the else statement)-------------------

let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside.");
} else if (temperature > 20) {
  console.log("The weather is warm.");
} else if (temperature > 10) {
  console.log("It's a bit chilly.");
} else {
  //"""""You can't skip the last "ELSE" part in this if-else-if condition"""""
  console.log("It's cold outside.");
}
