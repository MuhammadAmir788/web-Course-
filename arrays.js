const arrow = () => {
  return true;
};
const arr = [5, "six", true, null, [1, 2], { nam: "Amir" }, arrow];

//Push method
arr.push(1);

//pop method(in this method the newly added value will be deleted)
arr.pop(1);

//shift method(in this method the first value of arraywill be deleted)
arr.shift(1);

//unshift method(in this method the first value will be added in array)
arr.unshift(1);

//include methods
console.log(arr.includes("six"));

//index of method
console.log(arr.indexOf("six"));

console.log(arr);
