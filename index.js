let person = {
  name: "Vinod",
  age: 32,
};
console.log(person.name);
person.name = "Deshmukh";
console.log(person.name);
console.log(person);
person["age"] = 30;
console.log(person.age);
