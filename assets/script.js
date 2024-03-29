
var TimerEl = document.querySelector(".timer");
var startButton = document.querySelector(".container"); //.start-button
var questionContainerEl = document.querySelector("#question-container");
var answerButtonsEl = document.querySelector(".qbutton") //why is this needed?
let currentQuestion = 0 //set to 0 because we want to start on first Question of questions array
let currentScore = 0;
var timeLeft = 20;
let quizEndEl = document.querySelector("#results-container"); 
var timerEl = document.querySelector(".timer");
var highscoreButtonEl = document.querySelector("#highscore-button")
var highscoresEl = document.querySelector("#highscores-container");
var saveScoreButton = document.querySelector(".save-button") //.save-button
var topScoreList = document.querySelector(".top-scores")

var playAgainButton = document.querySelector(".play-again")

// Click Events
startButton.addEventListener("click", startGame); //prevent default? where does it go?
highscoreButtonEl.addEventListener("click", highscores);
saveScoreButton.addEventListener("click", highscores);
playAgainButton.addEventListener("click", refreshPage);
// localStorage.setItem("studentGrade", JSON.str ingify(studentGrade));
    // renderMessage();


function refreshPage() {
    window.location.reload()
};

//once start button is clicked, start page is hidden and quiz begins
function startGame(){
    currentScore = 0;
    // highscoresEl.style.display="none";
    startButton.style.display="none";
    questionContainerEl.classList.remove("hide");

    // questionList = getQuestionsList()
    // timeLeft = 0
    //shuffledQuestions = questions.sort(() => Math.random() -.5);
    // currentQuestionIndex = 0 //what does this do (starting on first question from questions array)
    
    showQuestion(); //create function below. cannot call if there is no function
    countdown()
};

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
}; 

//set next question fucntion once next is pressed
function selectAnswer(event){ 
    // check if user right or wrong 
    if(event.target.innerText === questionList[currentQuestion].answer){
        console.log("correct");
        currentScore += 1;
        // add correct choice button here
        event.target.setAttribute("style", "background-color:green;")
        console.log(currentScore);
    }else{
        console.log("wrong");
        event.target.setAttribute("style", "background-color:red;")
        // currentScore = currentScore - 1;
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
    
};


function highscores(e) {
    e.preventDefault();
    startButton.style.display="none";
    questionContainerEl.style.display="none";
    quizEndEl.style.display="none";
    var totalScoreStorage = localStorage.getItem("totalScore"); 
    //for loop loop through total scores for each entry (intitials and scores)
    // create li for each entry and append it to highscore list 
    //65-67 needs to be in for loop
    var li = document.createElement("li");
    li.textContent = "hello";
    topScoreList.appendChild(li)
    highscoresEl.classList.remove("hide");

    var scoreInputEl = document.querySelector("#score-input") 
    console.log("score input", scoreInputEl.value, "total score", currentScore );

    var newScore = { //totalScore - object
      initials: scoreInputEl.value, // property
      score: currentScore // property

   };
    if (totalScoreStorage) {
        var totalScore = JSON.parse(localStorage.getItem("totalScore"));
        totalScore.push(newScore);
        localStorage.setItem( "totalScore", JSON.stringify(totalScore));
        //grab entry and parse it if exists
        // update storage and send back
    } else {
        localStorage.setItem( "totalScore", JSON.stringify([newScore]));
    }
    // total score - key // this will save score and intials into browsers local storage
};

function renderMessage() { // pulls out of local storage and parses it
      var totalScore = JSON.parse(localStorage.getItem("totalScore")); //retireive using key name "totalScore"
      if (totalScore !== null) {
        document.querySelector(".top-scores").textContent = totalScore.initials + //this will append 
        " received a/an " + totalScore.score

      }
      
};

function showHighscore() {
    e.preventDefault();
};


function gameOver() {
    questionContainerEl.style.display="none";
    quizEndEl.classList.remove("hide");
    document.querySelector(".finalscore").textContent = "you scored " + currentScore + " points";
    
};

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
};


// Array Question List
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
];
    

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
    
    // localStorage.setItem("currentScore", JSON.stringify(currentScore));
    // renderMessage();
    
    // });
    
    // function renderMessage() {
    //   var currentScore = JSON.parse(localStorage.getItem("studentGrade"));
    //   if (currentScore !== null) {
    //     document.querySelector(".message").textContent = currentScore.student + 
    //     " received a/an " + lastGrade.grade
    //   }
    // }