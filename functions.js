//function declaration
function add(a, b) {
  console.log(a + b);
  //return true;     in function dectaration return value didn't work
}
add(1, 2);

//Function expression

let abc = function (c, d) {
  console.log(c);
  console.log(d);
  return true; //return value work i this function expression
};

console.log(abc(2, 4));

//Arrow function and anonymus functions

const evenOdd = (v1, v2) => {
  v1 % 2 == 0 ? console.log(`${v1} even`) : console.log(`${v1} odd`);
  v2 % 2 == 0 ? console.log(`${v2} even`) : console.log(`${v2} odd`);
};

evenOdd(6, 9);
