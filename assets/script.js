
// var secondsLeft = 20;

var startButton = document.querySelector(".container"); //.start-button
var questionContainerEl = document.querySelector("#question-container");
var answerButtonsEl = document.querySelector(".qbutton") //why is this needed?
let currentQuestion = 0 //set to 0 because we want to start on first Question of questions array
let curScore = 0;
//var timerEl = document.querySelector(".timer");

var questionList = [
    {
        questionText: "javaScript file has an extension of",
        choices: [".java", ".js", ".javascript", ".xml"], 
        answer: ".js"
    },

    {
        questionText: "An array Index starts with?",
        choices: ["-1", "0", "1", "2"],
        answer: "0"
    },

    {
        questionText: "In what year was javascript created?",
        choices: ["1970", "1990", "1995", "1981"],
        answer: "1995"
    },

    {
        questionText: "What does HTML mean?",
        choices: ["Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Trainer Marking Language"],
        answer: "Hyper Text Markup Language"
    },
]

startButton.addEventListener("click", startGame) //prevent default? where does it go?

// function gameOver(){
//     showQuestion("gameover");
// }
//start the game
function startGame(){

    curScore = 0
    startButton.style.display="none";
    questionContainerEl.classList.remove("hide");
    // questionList = getQuestionsList()
    // timeLeft = 0
    //shuffledQuestions = questions.sort(() => Math.random() -.5);
    // currentQuestionIndex = 0 //what does this do (starting on first question from questions array)
    
    showQuestion(); //create function below. cannot call if there is no function
}


//set next question fucntion once next is pressed
// function selectAnswer(){ 
    function selectAnswer(event){ 
        // check if user right or wrong 
        if(event.target.innerText === questionList[currentQuestion].answer){
            console.log("correct");
            curScore += 1;
            console.log(curScore);
        }else{
            console.log("wrong");
            curScore = score - 1
        }
    
        currentQuestion = currentQuestion + 1;
        showQuestion()
    //     currentQuestion = currentQuestion + 1; //transitions to next question when button clicked
    // showQuestion()
    }
    
    // check if user right or wrong
    
    // currentQuestion = currentQuestion + 1; //transitions to next question when button clicked
    // showQuestion()
// }

function showQuestion(){
    // if (questionList === 0) {
    //     gameOver()
    // } else {

    var questionTextEl = document.querySelector(".question-text"); //defines questionTextEL var
    questionTextEl.innerText = questionList[currentQuestion].questionText; // displays questions 

    // manually call buttons below //

    // var choiceButton0 = document.querySelector("#btn0");
    // choiceButton0.innerText = questions[currentQuestion].choices[0];

    // var choiceButton1 = document.querySelector("#btn1");
    // choiceButton1.innerText = questions[currentQuestion].choices[1];

    // var choiceButton2 = document.querySelector("#btn2");
    // choiceButton2.innerText = questions[currentQuestion].choices[2];

    // var choiceButton3 = document.querySelector("#btn3");
    // choiceButton3.innerText = questions[currentQuestion].choices[3];
    
    
    //displays button options with event listener. 
    for(i=0; i < 4; i++){
        console.log(i) // this shows that the loop registered answer buttons
        var buttonEl = document.querySelector("#btn" + i)
        console.log("btn" + i); // this prints
        buttonEl.innerText = questionList[currentQuestion].choices[i]
        buttonEl.addEventListener("click", selectAnswer)
    
    }
    // }
} 
    
//create a function when answer is selected


// for loop for user check
// function selectAnswer(e) {
//     console.log("you clicked an answer!");
//     const userChoice = e.target;
//     const correctChoice = userChoice.questionList.correct;
//     if (answer) {
//         console.log("yes")
//         // score += 10;
//     } else {
//         console.log("no")
//     // score -= 10;
//     }
// }

