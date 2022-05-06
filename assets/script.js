
var TimerEl = document.querySelector(".timer");
var startButton = document.querySelector(".container"); //.start-button
var questionContainerEl = document.querySelector("#question-container");
var answerButtonsEl = document.querySelector(".qbutton") //why is this needed?
let currentQuestion = 0 //set to 0 because we want to start on first Question of questions array
let curScore = 0;
var timeLeft = 10;
let quizEndEl = document.querySelector("#results-container"); 
var timerEl = document.querySelector(".timer");
var highscoreButtonEl = document.querySelector("#highscore-button")
var highscoresEl = document.querySelector("#highscores-container");
var saveScoreButton = document.querySelector(".save-button") //.save-button

var playAgainButton = document.querySelector(".play-again")

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
        choices: ["Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tension Marketing Language", "Hyper Trainer Marking Language"],
        answer: "Hyper Text Markup Language"
    },
]

startButton.addEventListener("click", startGame); //prevent default? where does it go?
highscoreButtonEl.addEventListener("click", highscores);
saveScoreButton.addEventListener("click", highscores);
playAgainButton.addEventListener("click", refreshPage);
// localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
    // renderMessage();

function refreshPage() {
    window.location.reload()

}


function highscores(e) {
    e.preventDefault();
    startButton.style.display="none";
    questionContainerEl.style.display="none";
    quizEndEl.style.display="none";
    highscoresEl.classList.remove("hide");

    var scoreInputEl = document.querySelector("#score-input") 
    console.log("score input", scoreInputEl.value, "total score", curScore );

    var totalScore = { //totalScore - object
      initials: scoreInputEl.value, // property
      score: curScore // property

   };
    
    localStorage.setItem( "totalScore", JSON.stringify(totalScore)); // total score - key // this will save score and intials into browsers local storage
}

function renderMessage() { // pulls out of local storage and parses it
      var totalScore = JSON.parse(localStorage.getItem("totalScore")); //retireive using key name "totalScore"
      if (totalScore !== null) {
        document.querySelector(".top-scores").textContent = totalScore.initials + //this will append 
        " received a/an " + totalScore.score
      }
    }


function showHighscore() {
    e.preventDefault();
}


function gameOver() {
    questionContainerEl.style.display="none";
    quizEndEl.classList.remove("hide");
    document.querySelector(".finalscore").textContent = "you scored " + curScore + " points";
    
}

function countdown() {
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        gameOver();
      }
    }, 1000);
  }

//start the game
function startGame(){
    curScore = 0;
    // highscoresEl.style.display="none";
    startButton.style.display="none";
    questionContainerEl.classList.remove("hide");

    // questionList = getQuestionsList()
    // timeLeft = 0
    //shuffledQuestions = questions.sort(() => Math.random() -.5);
    // currentQuestionIndex = 0 //what does this do (starting on first question from questions array)
    
    showQuestion(); //create function below. cannot call if there is no function
    countdown()
}

function showQuestion(){

    var questionTextEl = document.querySelector(".question-text"); //defines questionTextEL var
    questionTextEl.innerText = questionList[currentQuestion].questionText; // displays questions 

    //displays button options with event listener. 
    for(i=0; i < 4; i++){
        console.log(i) // this shows that the loop registered answer buttons
        var buttonEl = document.querySelector("#btn" + i);
        buttonEl.style.backgroundColor = "lightgrey"; // ?????
        console.log("btn" + i); // this prints
        buttonEl.innerText = questionList[currentQuestion].choices[i]
        buttonEl.addEventListener("click", selectAnswer)

    }
} 

//set next question fucntion once next is pressed
function selectAnswer(event){ 
    // check if user right or wrong 
    if(event.target.innerText === questionList[currentQuestion].answer){
        console.log("correct");
        curScore += 1;
        // add correct choice button here
        event.target.setAttribute("style", "background-color:green;")
        console.log(curScore);
    }else{
        console.log("wrong");
        event.target.setAttribute("style", "background-color:red;")
        // curScore = curScore - 1;
        timeLeft -= 3;
    }

    currentQuestion = currentQuestion + 1; //transitions to next question when button clicked
    if (currentQuestion < questionList.length) {
        setTimeout(showQuestion, 2000); // putting a set timeout here prevents the next question from appearing immediatly 
        // showQuestion()
    } else {
        console.log("Quiz Completed!");
        gameOver();
    }
    
}
    

// how to manually call buttons //

    // var choiceButton0 = document.querySelector("#btn0");
    // choiceButton0.innerText = questions[currentQuestion].choices[0];

    // var choiceButton1 = document.querySelector("#btn1");
    // choiceButton1.innerText = questions[currentQuestion].choices[1];

    // var choiceButton2 = document.querySelector("#btn2");
    // choiceButton2.innerText = questions[currentQuestion].choices[2];

    // var choiceButton3 = document.querySelector("#btn3");
    // choiceButton3.innerText = questions[currentQuestion].choices[3];




    // var student = document.getElementById("student-names");
    // var grade = document.getElementById("grades");
    // var comment = document.getElementById("msg");
    // var saveButton = document.getElementById("save");
    // var savedName = document.getElementById("saved-name");
    
    // saveButton.addEventListener("click", function(event) {
    // event.preventDefault();
    
    // var studentGrade = {
    //   student: student.value,
    //   grade: grade.value,
    //   comment: comment.value.trim()
    // };
    
    // localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
    // renderMessage();
    
    // });
    
    // function renderMessage() {
    //   var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
    //   if (lastGrade !== null) {
    //     document.querySelector(".message").textContent = lastGrade.student + 
    //     " received a/an " + lastGrade.grade
    //   }
    // }


    // saveScoreButton.addEventListener("click", function(event) {
    // event.preventDefault();
    
    // var studentGrade = {
    //   student: student.value,
    //   grade: grade.value,
   
    // };
    
    // localStorage.setItem("curScore", JSON.stringify(curScore));
    // renderMessage();
    
    // });
    
    // function renderMessage() {
    //   var curScore = JSON.parse(localStorage.getItem("studentGrade"));
    //   if (curScore !== null) {
    //     document.querySelector(".message").textContent = curScore.student + 
    //     " received a/an " + lastGrade.grade
    //   }
    // }