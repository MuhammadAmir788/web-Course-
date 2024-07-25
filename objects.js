const person = {
  name: "Muhammad Amir",
  age: 20,
  gender: "male",
  address: {
    city: "Multan",
  },
  array: [1, 2],
  sayHello: function () {
    return "Muhammad Amir";
  },
};
const person1 = {
  name: "Muhammad Umair",
  age: 21,
  gender: "male",
  address: {
    city: "Multan",
  },
  array: [3, 2],
  sayHello: function () {
    return "Muhammad Umair";
  },
};
const person2 = {
  name: "Muhammad Sami",
  age: 22,
  gender: "male",
  address: {
    city: "BWP",
  },
  array: [3, 5],
  sayHello: function () {
    return "Muhammad Sami";
  },
};
const person3 = {
  name: "Muhammad Jafar",
  age: 25,
  gender: "male",
  address: {
    city: "Multan",
  },
  array: [2, 7],
  sayHello: function () {
    return "Muhammad Jafar";
  },
};
const person4 = {
  name: "Aqsa",
  age: 20,
  gender: "female",
  address: {
    city: "Lahore",
  },
  array: [4, 8],
  sayHello: function () {
    return "Aqsa";
  },
};

let arr = [person, person1, person2, person3, person4];

console.log(person2.name);
console.log(person2.gender);
console.log(person2.array[1]);
console.log(person2.address.city);
