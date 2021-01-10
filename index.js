const chalk = require('chalk');
console.log(chalk.cyanBright.italic("Let's start quiz!!"));

const ask = chalk.red;
const msg = chalk.green;
const crt = chalk.yellowBright.bold;
const wrg = chalk.blueBright.bold;
const ln = chalk.whiteBright;
const rs = chalk.green.bold;
const ss = chalk.white.bold;
const fn = chalk.cyan.bold;
const nt = chalk.red.bold;

var readlineSync = require('readline-sync');

console.log("\n");
var userName = readlineSync.question(ask('May I have your name? '));
var score = 0;
console.log(msg("welcome "+ userName));
console.log("\n");
console.log(msg("Niyam ek hi hai : LOYALITY "));
console.log(msg("----write everything in small letter----"));
console.log("\n");

// yes and no play function

function yn(question, answer){
  var userAns = readlineSync.keyInYN(ask(question));

if (userAns === answer){
  console.log(crt("you are right"));
  score = score + 1 ;
}
else{
  console.log(wrg("you are wrong"));
}
console.log(chalk.cyanBright("Your Score: ", chalk.green(score)));
console.log("\n");
}


var questionO = {
  question : "Am i live in ajmer ? ",
  answer: true
}

var questiontw = {
  question : "Am i engineering student ? ",
  answer: true
}

var questionth = {
  question : "am i read daily? ",
  answer: false
}

var questionfo = {
  question : "am i good at study ? ",
  answer: false
}

var questionfi = {
  question : "am i good at development ? ",
  answer: true
}

var questionyn= [questionO, questiontw, questionth,questionfo, questionfi ];

for(var i=0; i<questionyn.length ; i++){
  var currentQuest  = questionyn[i];
  yn(currentQuest.question, currentQuest.answer)
}


console.log(ln("---------------------"))
if (score < 5){
  console.log(ask("you lose at Level 1 \n Better Luck for next time"))
  console.log(nt("AApse better umid kiye the HUM "));
  process.exit()
}
else {
  console.log(rs("yay! your score: ", fn(score)));
console.log(crt("Congratulation!! You cross level 1"));
}




// mcq question list

function quizMcq(listOfAnswers,question,answer){
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    console.log(crt("you are right"));
    score = score + 1;
  } else{
    console.log(wrg("you are wrong"));
  }
  console.log(chalk.cyanBright("Your Score: ", chalk.green(score)));
console.log("\n");
}

var mcqOne = {
  array : ['Mumbai', 'Hyderabad', 'Guragon', 'Bangalore'],
    question : 'Which City is known as "Electronic City of India"? ',
    answer : 'Bangalore'
}

var mcqTwo = {
  array : ['Kerala', 'Madras', 'Bangalore', 'New Delhi'],
    question : 'The Indian Institute of Science is located at ',
    answer : 'Bangalore'
}

var mcqThree = {
  array : ['Dugong', 'Blue whale', 'River Dolphin', 'Pygmy Killer Whale'],
    question : 'What is the name of India\'s National Aquactic Animal: ',
    answer : 'River Dolphin'
}

var mcqFour = {
 array : ['New Delhi', 'Hyderabad', 'Amritsar', 'Mumbai'],
    question : 'The Centre for Cellular and Molecular Biology in India is situated at: ',
    answer : 'Hyderabad'
}

var mcqFive = {
   array : ['Delhi', 'Dehradun', 'Lucknow', 'Gandhinagar'],
    question : 'National Institute of Aeronautical Engineering is located at ',
    answer : 'Delhi'
}

var mcqList= [mcqOne, mcqTwo, mcqThree, mcqFour, mcqFive ];

for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
  console.log("\n");
  console.log('*******************************');
}

if(score < 10){
  console.log(wrg("you lose at Level 2 \n Better Luck for next time"));
  console.log(nt("AApse better umid kiye the HUM "));
  process.exit()
}
else {
  console.log(rs("yay! your score: ", fn(score)));
console.log(crt("Congratulation!! You cross level 2"));
}
console.log("\n");


// write  function
function play(question, answer){
  var userAnswer = readlineSync.question(ask(question));

if (userAnswer === answer){
  console.log(crt("you are right"));
  score = score + 1 ;
}
else{
  console.log(wrg("you are wrong"));
}
console.log(chalk.cyanBright("Your Score: ", chalk.green(score)));
console.log("\n");
}

var questionOne = {
  question : "where i live ? ",
  answer: "ajmer"
}

var questiontwo = {
  question : "what is my favourite superhero ? ",
  answer: "batman"
}

var questionthree = {
  question : "what is my favourite food? ",
  answer: "daal bati"
}

var questionfour = {
  question : "what is my favourite game ? ",
  answer: "cricket"
}

var questionfive = {
  question : "what is my dream company ? ",
  answer: "amazon"
}

var questions = [questionOne, questiontwo, questionthree,questionfour, questionfive ];

for(var i=0; i<questions.length ; i++){
  var currentQuestion  = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}


console.log(ln("---------------------"))
if (score < 15){
  console.log("you lose at Level 3 \n Better Luck for next time")
  console.log(nt("AApse better umid kiye the HUM "));
  process.exit()
}
else {
  console.log(rs("yay! your score: ", fn(score)));
console.log(crt("Congratulation!! You cross level 3"));
}
console.log("\n");

var max = 14;
if (score > max ){
  console.log(crt("Congratulation!! you beat highest score "));
  console.log(ln("---------------------"))
   console.log(fn("Buddhi bahut Tez hai aapki "));
console.log(ss("Take Screenshot and send it to vishal so he can update it on server!!"));

}
else{
  console.log(nt("AApse better umid kiye the HUM "));
}


