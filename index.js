// Proto: It is an actual object that provides a way to inherit properties from JavaScript 
// with the help of an object which is created with new. Every object with behavior associated has internal property [[prototype]].

// Prototype: It is a special object which means it holds shared attributes and behaviors of instances. 
// It is a way to inherit properties from javascript as it is available in every function declaration.


// __proto__ is the actual object that is used in the lookup chain to resolve methods, etc. 
// prototype is the object that is used to build __proto__ when you create an object with new:

//Every single entity is like an object

//Every object has object prototype in it
//Based on the type of the variable.

//var a =2
// Number.prototype
// object.prototype
// null


// Quiz
// questions
// score
// questionIndex to track of quiz status

// class Quiz{
//     private List<Question> questions;
//     private Int score;
//     private Int questionIndex;
        // Quiz(List<Questions> questions){
        //     this.questions=questions;
        // }

//     public boolean isEnded(){
        // return questionIndex==questions.size();
// }
// }
// List<Questions> sciencequestions = getScienceQuestions();
// Quiz scienceQuiz = new Quiz(scienceQuestions);
// List<Questions> mathsQ = getMathsQ();
// Quiz mathsQ = new Quiz(mathsQ);
//mathsQ.isEnded()==scienceQ.isEnded();
function Quiz(questions){
    this.questions = questions;
    this.score = 0
    this.questionIndex = 0;
}

Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.questions.length;
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function(userAnswer){
    if(this.getQuestionByIndex().isCorrectAnswer(userAnswer)){
        this.score++;
    }
    this.questionIndex++;
}

 function Question(questionText,choices,answer){
    this.questionText=questionText;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.isCorrectAnswer = function(userAnswer){
    return this.answer===userAnswer;
}


// function loadQuestions(){
//     //if quiz.isEnded()
//         // showScores()
//     // else{
//         //update question, options, progress, eventlisteners
//         // question = quiz.getQuestionByIndex();
//         // document.getElementById("question").innerText = question.questionText;
//         // questionChoice = question.choices;
//         for each of the questionChoice
//             document.getElementById("choice"+i).innerText = questionChoice[i];
//             // handleOptionButton("btn"+i,questionChoice[i])
//         updateProgress()
//     // }
// }
function loadQuestions() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        let question = quiz.getQuestionByIndex();
        var element = document.getElementById("question");
        element.innerHTML = question.questionText;
  
        // show options
        var choices = question.choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            handleOptionButton("btn" + i, choices[i]);
        }
  
        updateProgress();
    }
}

function handleOptionButton(id,choice){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }
}


function updateProgress(){
    // quiz.questionIndex+1.. questionNumber
    // console.log("progress to be updated");
    var element = document.getElementById("progress");
    // getProgressElement and update innerHTML `Question ${quiz.questionIndex+1} of quiz.questions.length`
    element.innerHTML=`Question ${quiz.questionIndex+1} of ${quiz.questions.length}`;
}

function showScores(){
    let quizOverHTML =  `<h1> Result</h1> <h2> Your score : ${quiz.score} & percentage is ${quiz.score*100/quiz.questions.length} %</h2>`;
    document.getElementById("quiz").innerHTML=quizOverHTML;
}


let questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
  ];

let quiz = new Quiz(questions);
loadQuestions();