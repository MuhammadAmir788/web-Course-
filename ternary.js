let a = 4;
let b = 5;
let c = 6;
let d = 7;

let big =
  a > b
    ? a > c
      ? a > d
        ? a
        : d
      : c
    : b > c
    ? b > d
      ? b
      : d
    : c > d
    ? c
    : d > a
    ? d
    : a;
console.log(big);
