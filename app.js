const Array = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < Array.length; i++) {
  sum += Array[i];
}
console.log(sum);
const person = [
  {
    Name: "Sandro",
    Age: 18,
    Adress: "Tbilisi",
  },
];
console.log(
  `My name is:` + person[0].Name,
  `My age is:` + person[0].Age,
  `And my adress is:` + person[0].Adress
);

if (person[0].Age < 18) {
  console.log("I am teenager");
} else if (person[0].Age === 18) {
  console.log("I am 18 years old");
} else {
  console.log("I am adult");
}