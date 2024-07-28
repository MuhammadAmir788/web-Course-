const array = [1, 2, 3, 4, 5, 6, 7];
const [A, B, ...c] = array;
console.log(c);

const array1 = array;
array1[1] = "two";
console.log(array);
