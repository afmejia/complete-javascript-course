// Function constructor
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calcaulateAge = function() {
//   console.log(2019 - this.yearOfBirth);
// };

// Person.prototype.lastName = "Smith";

// var john = new Person("John", 1990, "teacher");
// var felipe = new Person("Felipe", 1993, "Software Developer");

// john.calcaulateAge();

// console.log(john.lastName);
// console.log(felipe.lastName);

// Object.create
// var personProto = {
//   calcaulateAge: function() {
//     console.log(2019 - this.yearOfBirth);
//   }
// };

// var john = Object.create(personProto);
// john.name = "John";
// john.yearOfBirth = 1990;
// john.job = "teacher";

// var felipe = Object.create(personProto, {
//   name: { value: "Felipe" },
//   yearOfBirth: { value: 1993 },
//   job: { value: "Software developer" }
// });

// Primitive vs. objects
// var a = 19;
// var b = a;
// a = 22;
// console.log(a);
// console.log(b);

// var obj1 = {
//   name: "Felipe",
//   age: 26
// };

// var obj2 = obj1;
// obj1.name = "Andres";

// console.log(obj1);
// console.log(obj2);

// Functions
// var age = 27;
// var obj = {
//   name: "Felipe",
//   age: 27
// };

// function change(a, b) {
//   a = 30;
//   obj.name = "Andres";
// }

// change(age, obj);

// console.log(age);
// console.log(obj);

// function interviewQuestion(job) {
//   if (job === "designer") {
//     return function(name) {
//       console.log(name + ", can you please explain what UX design is?");
//     };
//   } else if (job === "teacher") {
//     return function(name) {
//       console.log("What subject do you teach, " + name + "?");
//     };
//   } else {
//     return function(name) {
//       console.log("Hello " + name + ", what do you do?");
//     };
//   }
// }

// var teacherQuestion = interviewQuestion("teacher");
// teacherQuestion("Felipe");

// interviewQuestion("designer")("Mark");

// (function() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// (function(goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

// Closures
function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementCOL = retirement(62);
retirementCOL(1993);

retirement(62)(1993);
