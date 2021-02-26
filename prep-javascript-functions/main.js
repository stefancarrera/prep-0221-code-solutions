function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addTwoNumbers(2, 2));
console.log('The sum is', addTwoNumbers(18, 35));

function convertHoursToMinutes(num1) {
  return num1 * 60;
}
console.log(convertHoursToMinutes(2));

function personalizedGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
console.log(personalizedGreeting('World'));
console.log(personalizedGreeting('Clarice'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * (5);
}
console.log(addAndMultiplyBy5(10, 5));

function multiplayAndDivideBy5(num1, num2) {
  return (num1 * num2) / (5);
}
console.log(multiplayAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log(getCircleCircumference(5));

function getCircleCircumference2(radius) {
  return 2 * 3.14159265359 * radius;
}
console.log(getCircleCircumference2(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(getFullName('Juan', 'Ramirez'));

function cube(number) {
  return number * number * number;
}
console.log(cube(5));

function cube2(base, exponent) {
  return Math.pow(base, exponent);
}
console.log(cube2(5, 3));
