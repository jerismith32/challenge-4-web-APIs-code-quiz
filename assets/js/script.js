let startQuiz = document.getElementById("startBtn");
let quizSection = document.getElementById("quiz");
let instructions = document.getElementById("instructions");
let highScoresBtn = document.getElementById("highScoresBtn");
let sessionScore = document.getElementById("recordhighscores");
let highScoreList = document.getElementById("highscorelist");
let clearHighScoreBtn = document.getElementById("clear");
let initials = document.getElementById("initals");
//initials.value will capture the input value of the user
let currentScore = document.getElementById("finalscore");
let currentScoreSubmitBtn = document.getElementById("submit");
let clearBtn = document.getElementById("clear");
let highscoresSavedDiv = document.getElementById("highscoresSaved");
let initialsSavedDiv = document.getElementById("initialsSaved");

//Initially timerCountDown variable will be undefined
let timerCountDown;
let timerEl = document.getElementById('timer');
let timeLeft = 60;

//Countdown Function for the Timer
function countdown() {
  timeLeft--;
  timerEl.innerHTML = timeLeft;

  if (timeLeft === 0) {
    endQuiz();
  }
};

//Starts the Quiz on the Start Quiz Button Click
startQuiz.addEventListener('click', function (event) {

    //console.log('quizSection')
    //Shows the Quiz Section
    quizSection.classList.add("show");
    //Hides the Instructions
    instructions.classList.add("hide");
   //Invokes the Countdown Timer
    countdown();
    //Invokes the Quiz Questions.
    displayQuiz();

    timerCountDown = setInterval(countdown, 1000);

});


//This is where the questions are housed with the choice options and the correct answer identified. 
let questions = [
    {
        question: "Which of the following is true about JavaScript?",
        choices: ["Text-Based Programming Language", "Can Make A Webpage Interactive", "Enables Multimedia", "All of These"],
        correct: "All of These"
    },
    {
        question: "What is the DOM?",
        choices: ["Document Object Model", "Document Oriented Model", "Decoder Object Model", "Document Object Moodle"],
        correct: "Document Object Model"
    },
    {
      question: "How do you create a function in JavaScript?",
      choices: ["function newFunction()", "function:newFunction()", "function=myFunction()"],
      correct: "function newFunction()"
    },
    {
      question: "Which of the following is not a type of loop in JavaScript?",
      choices: ["for", "while", "if", "for/of"],
      correct: "if"
    },
    {
      question: "Which variable cannot be reassigned?",
      choices: ["var", "const", "let"],
      correct: "const"
    },
    {
      question: "Which array method removes the last element of an array?",
      choices: ["pop()", "push()", "indexOf()", "sort()"],
      correct: "pop()"
    },
    {
      question: "Which of the following is not an array method?",
      choices: ["join()", "parseFloat()", "reverse()", "shift()"],
      correct: "parseFloat()"
    },
    {
      question: "What can be used to join several arrays into one?",
      choices: ["concat()", "indexOf()", "join()", "lastIndexOf()"],
      correct: "concat()"
    }

]


let index = 0;
let score = 0;
//This is the function that will allow the quiz questions to be displayed
function displayQuiz() {
  let questionContainer = document.getElementById("question");
  //console.log('Question', questions[index].question);
  
  //Appends the Question to the DOM
  questionContainer.innerHTML = questions[index].question;

  let choices = questions[index].choices
  let choicesContainer = document.getElementById("choices");
  for (let i=0; i < choices.length; i++) {
    //console.log(choices[i]);
    let btn = document.createElement("button");
    btn.innerHTML = choices[i];

    btn.addEventListener("click", function(e) {
      //console.log(e.target);
      //console.log(questions[index].correct);
      //console.log("e.target", e.target.value); returned empty
      let userAnswer = e.target.textContent;
      //console.log("userAnswer", userAnswer);
      let correctAnswer = questions[index].correct;
      //console.log("correctAnswer", correctAnswer);
      if (userAnswer == correctAnswer) {
        console.log("correct!");
        alert("Correct!");
        score++
        
      }
      else {
        console.log("incorrect");
        alert("Incorrect! 10 seconds has been deducted from your time.");
        //Decreases the time by 10 seconds for incorrect answer
        timeLeft -= 10;
        if (timeLeft <= 0) {
          endQuiz();
        }

      } 
      //This will take us to the next question
      index++;
      //console.log(index);
      console.log(score);
      //Need to clear the buttons from the previous question, so the next buttons can be populated
      choicesContainer.innerHTML = "";
      //This will end the quiz when the user answers the last question
      if (index >= questions.length) {
        endQuiz();
      }
      displayQuiz();
    });

    //This will allow the question choice options to appear
    choicesContainer.append(btn);
  }  
  
};


highScoresBtn.addEventListener('click', function (event) {
  quizSection.classList.remove("show");
  //By removing the class list show this will ensure the functionality of the high score button if the user uses that button during the quiz
  //Hides the Quiz Section
  quizSection.classList.add("hide");
  //Hides the Instructions
  instructions.classList.add("hide");
  sessionScore.classList.remove("show");
  //Hides the Session Score Section 
  sessionScore.classList.add("hide");
  //Shows the High Score List
  highScoreList.classList.add("show");

  //Pull all the high scores from local storage and put them into the "highscores div"
  let highscoreSaved = localStorage.getItem('score');
  let initialsSaved = localStorage.getItem('initials');
  // If they are null, return early from this function
  if (highscoreSaved === null || initalsSaved === null) {
    return;
  }

  highscoresSavedDiv.textContent = highscoreSaved;
  initialsSavedDiv.textContent = initialsSaved;

  //Clear high scores to clear local storage
  clearBtn.addEventListener('click', function (event) {
    localStorage.clear();
    console.log("Local Storage has been cleared");
  })

});

function endQuiz() {
  quizSection.classList.remove("show");
  quizSection.classList.add("hide");
  sessionScore.classList.add("show");
  currentScore.innerHTML = score;
  //This will end the timer
  clearInterval(timerCountDown);
  currentScoreSubmitBtn.addEventListener('click', function (event) {
    localStorage.setItem('score', score);
    //let saveInitials = initials.value;
    console.log('initials', initials.value);
    localStorage.setItem('initials', initials);
  })
}