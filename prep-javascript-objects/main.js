var person = {
  firstName: 'Deckard',
  lastName: 'Cain',
  hobby: 'Journaling'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Monitoring the Prime Evils';
console.log("This person's job is:", person.job);

person.previousJob = 'Uncle';
console.log("This person's previous job was:", person.previousJob);

console.log(person);

var myCar = {
  make: 'Hyundai',
  model: 'Santa Fe',
  year: '2020'
};

console.log(myCar);

myCar['owner'] = fullName;
console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.');

myCar['color'] = 'navy blue';

console.log(myCar)
;
