// var time = document.querySelector(".time");
// var secondsLeft = 20;

// function setTime() {
    
// }

var startButton = document.querySelector(".container"); //.start-button
var questionContainerElement = document.querySelector("#question-container");
var answerButtonsElement = document.querySelector(".qbutton") //why is this needed?
let currentQuestion = 0

var questions = [
    {
        questiontext: "What does HTML mean?",
        choices: ["hello", "hi there,", "exmaple", "okay"],
        answer: "hello"
    },

    {
        questiontext: "What does HTML mean?",
        choices: ["hello", "hi there,", "exmaple", "okay"],
        answer: "hello"
    },

    {
        questiontext: "What does HTML mean?",
        choices: ["hello", "hi there,", "exmaple", "okay"],
        answer: "hello"
    },

    {
        questiontext: "What does HTML mean?",
        choices: ["hello", "hi there,", "exmaple", "okay"],
        answer: "hello"
    },
]
// var questionElement = document.querySelector("#question"); //why is this needed?

 //index? , shuffledQuestions, MUST be "let"??

startButton.addEventListener("click", startGame) //prevent default? where does it go?



//start the game
function startGame(){
    console.log("Hey you clicked the start button!");
    startButton.style.display="none";
    //shuffledQuestions = questions.sort(() => Math.random() -.5);
    // currentQuestionIndex = 0 //what does this do (starting on first question from questions array)
    questionContainerElement.classList.remove("hide");
    
    showQuesion();

}


//set next question fucntion once next is pressed
function showQuesion(){
    var questionTextEl = document.querySelector(".question-text");
    questionTextEl.innerText = questions[currentQuestion].questionText;

    var choiceButton0 = document.querySelector("#btn0");
    choiceButton0.innerText = questions[currentQuestion].choices[0];


    
    
    
    
} 
    // for(i=0; i < 4; i++){
    //     console.log(i)
    //     var button = document.querySelector("#btn" + i)
    //     console.log("btn" + i);
    //     button.innerText = questions [currentQuestion].choices[i]
    // }


// function showQuestion(question){
//     questionElement.innerText = question.question
// }

//create a function when answer is selected
// function selectAnswer(){

// }

