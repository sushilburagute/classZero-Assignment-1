const readlineSync = require('readline-sync');
const chalk = require('chalk');

// User Declaration
var userName = readlineSync.question(chalk.bgRed("Comrade! What's your name?  "));
console.log(chalk.red("Welcome " + userName +" to 'DO YOU KNOW BATMAN?'🏆"));
console.log(chalk.grey("\n-------------------------------------------------\n") )

var score = 0;

// Questions Object
const quizQuestions = [{
  question: "What is Batman's real name? ",
  answer: "Bruce Wayne",
},{
  question: "What is his sidekick's name? ",
  answer: "Robin",
},{
  question: "What is Batman's IQ level? (It's greater than 180) ",
  answer: "192",
}, {
  question: "When is Bruce Wayne's Birthday? (Answer in DD/MM) ",
  answer: "19/02",
},
]

//  Core Quiz Function
function ask(question, answer){
  var userAnswer = readlineSync.question(chalk.bgBlue(question));

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.bgGreen("That's the right answer! ✨"));
    score ++;
  } else {
    console.log(chalk.bgRed("Sorry, that's the wrong answer. The correct answer is: " + answer));
  }

  console.log(chalk.blue(userName + ", Your score is: " + score));
  console.log(chalk.grey("\n-------------------------------------------------\n") );
}

// loop to throw question

for(var i = 0; i<quizQuestions.length; i++) {
  var currentQuestion = quizQuestions[i];
  ask(currentQuestion.question, currentQuestion.answer);
}