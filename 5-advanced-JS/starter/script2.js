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

// Rewrite function using closures
// function interviewQuestion(job) {
//   return function(name) {
//     if (job === "designer") {
//       console.log(name + ", can you please explain what UX design is?");
//     } else if (job === "teacher") {
//       console.log("What subject do you teach, " + name + "?");
//     } else {
//       console.log("Hello " + name + ", what do you do?");
//     }
//   };
// }
//
// interviewQuestion("teacher")("Felipe");

//var john = {
//  name: "John",
//  age: 26,
//  job: "teacher",
//  presentation: function(style, timeOfDay) {
//    if (style === "formal") {
//      console.log(
//        "Good " +
//          timeOfDay +
//          ", Ladies and gentlemen! I'm " +
//          this.name +
//          " I'm a " +
//          this.job +
//          " and I'm " +
//          this.age +
//          " years old. Have a nice " +
//          timeOfDay +
//          "."
//      );
//    } else if (style === "friendly") {
//      console.log(
//        "Hey! What's up? I'm " +
//          this.name +
//          " I'm a " +
//          this.job +
//          " and I'm " +
//          this.age +
//          " years old. Have a nice " +
//          timeOfDay +
//          "."
//      );
//    }
//  }
//};
//
//var emily = {
//  name: "Emily",
//  age: 35,
//  job: "designer"
//};
//
//john.presentation("formal", "morning");
//
//john.presentation.call(emily, "friendly", "afternoon");
//
//// john.presentation.apply(emily, ["friendly", "afternoon"]);
//
//var johnFriendly = john.presentation.bind(john, "friendly");
//johnFriendly("morning");
//johnFriendly("night");


// Quiz game
(function() {

    // Random question
    function randQuestion(questions) {
        question = questions[Math.floor(Math.random() * 3)];
        question.printQuestion();
        return question;
    }

//    Question constructor -> Mine
//    var Question = function (question, answers, correct) {
//        this.question = question;
//        this.answers = answers;
//        this.correct = correct;
//        this.printQuestion = function () {
//            console.log(this.question);
//            for (var i = 0; i < answers.length; i++) {
//                console.log(i + ": " + answers[i])
//            }
//        };
//        this.isCorrect = function (answer) {
//            if (this.correct === answer) {
//                score++;
//                console.log("Correct answer!")
//            } else {
//                console.log("Wrong answer. Try again :)")
//            }
//        };
//        this.displayScore = function () {
//            console.log("Your current score is: " + score);
//            console.log("-------------------");
//        }
//    };
    
    // Question constructor -> Course
    function Question (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };
    
    Question.prototype.printQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i])
        }
    };

    Question.prototype.isCorrect = function (answer, callback) {
        var sc;

        if (this.correct === answer) {
            console.log("Correct answer!");
            sc = callback(true);
        } else {
            console.log("Wrong answer. Try again :)");
            sc = callback(false);
        }
        
        this.displayScore(sc);
    };
    
    Question.prototype.displayScore = function (score) {
        console.log("Your current score is: " + score);
        console.log("-------------------");
    };
    
    // Create questions
    var question1 = new Question("Which is my favorite backend language?", ["Java", "PHP", "Python", "Go"], 2);
    var question2 = new Question("Which is the programming language used with Node?", ["PHP", "C++", "Python", "JavaScript"], 3);
    var question3 = new Question("Which is my favorite subject in Computer Science?", ["Software architecture", "Machine Learning", "Backend development", "Front-end development"], 1);

    // Add questions to an array
    var questions = new Array(question1, question2, question3);
    
    function score () {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        };
    }
    
    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].printQuestion();

        var answer = prompt("Please select the correct answer (Just type the number).");
        
        if (answer !== "exit") {
            questions[n].isCorrect(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    
    nextQuestion();
    
    
//    var question = randQuestion(questions);
//    var score = 0;
//
//    // Ask the user for the correct answer
//    while (answer !== "exit") {
//        question.isCorrect(parseInt(answer));
//        question.displayScore();
//
//        // Select random question
//        var question = randQuestion(questions);
//
//        // Ask the user for the correct answer
//        answer = prompt("Please select the correct answer (Just type the number).");
//    }
})()