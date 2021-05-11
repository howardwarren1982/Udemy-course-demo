'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const howard = new Person('how', 1991);

// console.log(howard);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
//car object
//
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jess', 1996);
console.log(jessica);
jessica.calcAge();

console.log('New Feature here');
//fhwshifawehfafhwuifhsaiufhuiwefhweiaufgwiofgwyufgwayfugwyfgweai
