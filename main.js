//constant
const a = 10;
console.log("Value of A in outer scope", a);
{
  const a = 20;
  console.log("Value of A in inner scope", a);
}
console.log(a);

//Let
let b = 10;
console.log("Value of B in outer scope", b);
{
  let b = 20;
  console.log("Value of B in inner scope", b);
}
console.log(b);

//var
var c = 10;
console.log("Value of C in outer scope", c);
{
  var c = 20;
  console.log("Value of C in inner scope", c);
}
console.log(c);
