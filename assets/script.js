
// var secondsLeft = 20;

var startButton = document.querySelector(".container"); //.start-button
var questionContainerElement = document.querySelector("#question-container");
var answerButtonsEl = document.querySelector(".qbutton") //why is this needed?
let currentQuestion = 0 //set to 0 because we want to start on first Question of questions array
//var timerEl = document.querySelector(".timer");

var questionList = [
    {
        questionText: "what is 2 + 2?",
        choices: ["4", "6", "44", "12"], 
        answer: "4"
    },

    {
        questionText: "what color is the sky",
        choices: ["blue", "red", "green", "purple"],
        answer: "blue"
    },

    {
        questionText: "What does HTML mean?",
        choices: ["hello", "hi there", "exmaple", "okay"],
        answer: "hello"
    },

    {
        questionText: "What does HTML mean?",
        choices: ["hello", "hi there", "exmaple", "okay"],
        answer: "hello"
    },
]
// var questionElement = document.querySelector("#question"); //why is this needed?

 //index? , shuffledQuestions, MUST be "let"??

startButton.addEventListener("click", startGame) //prevent default? where does it go?


//start the game
function startGame(){

    score = 0
    startButton.style.display="none";
    questionContainerElement.classList.remove("hide");
    // questionList = getQuestionsList()
    // timeLeft = 0
    // console.log("Hey you clicked the start button!");
    //shuffledQuestions = questions.sort(() => Math.random() -.5);
    // currentQuestionIndex = 0 //what does this do (starting on first question from questions array)
    
    
    showQuestion(); //create function below. cannot call if there is no function
}


//set next question fucntion once next is pressed

function quizIndex(){ 
    // check if user right or wrong 
    currentQuestion = currentQuestion + 1;
    showQuestion()
}

function showQuestion(){
    var questionTextEl = document.querySelector(".question-text");
    questionTextEl.innerText = questionList[currentQuestion].questionText;

    // manually call buttons below //

    // var choiceButton0 = document.querySelector("#btn0");
    // choiceButton0.innerText = questions[currentQuestion].choices[0];

    // var choiceButton1 = document.querySelector("#btn1");
    // choiceButton1.innerText = questions[currentQuestion].choices[1];

    // var choiceButton2 = document.querySelector("#btn2");
    // choiceButton2.innerText = questions[currentQuestion].choices[2];

    // var choiceButton3 = document.querySelector("#btn3");
    // choiceButton3.innerText = questions[currentQuestion].choices[3];
    
    for(i=0; i < 4; i++){
        console.log(i) // this shows that the loop registered answer buttons
        var buttonEl = document.querySelector("#btn" + i)
        console.log("btn" + i); // this prints
        buttonEl.innerText = questionList[currentQuestion].choices[i]
        buttonEl.addEventListener("click", quizIndex)
    
    }

} 
    


// function showQuestion(question){
//     questionElement.innerText = question.question
// }

//create a function when answer is selected
// function selectAnswer(){

// }

