let startQuiz = document.getElementById("startBtn");
let quizSection = document.getElementById("quiz");
let instructions = document.getElementById("instructions");

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

});

var timerEl = document.getElementById('timer');

// Timer that counts down from 5
function countdown() {
    var timeLeft = 90;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
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
      }
    }, 1000);
  }


//This is where the questions are housed with the choice options and the correct answer identified. 
let questions = [
    {
        question: "Which of the following is true about JavaScript?",
        choices: ["Text-Based Programming Language", "Can Make A Webpage Interactive", "Enables Multimedia", "All of These"],
        correct: "All of These"
    },
    {
        question: "What is the DOM?",
        choices: ["Document Object Model", "Document Oriented Model", "Decoder Object Model", "Document Objece Moodle"],
        correct: "Document Object Model"
    },
    {
      question: "Which of the following is the correct HTML element to execute JavaScript code?",
      choices: ["<link>", "<body>", "<script>", "<div>"],
      correct: "<script>"
    },
    {
      question: "Which of the following is the correct HTML element to execute JavaScript code?",
      choices: ["<link>", "<body>", "<script>", "<div>"],
      correct: "<script>" 
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


var index = 0;
//This is the function that will allow the quiz questions to be displayed
function displayQuiz() {
  let questionContainer = document.getElementById("question");
  //console.log('Question', questions[index].question);
  //Appends the Question to the DOM
  questionContainer.innerHTML = questions[0].question;

  var choices = questions[index].choices
  let choicesContainer = document.getElementById("choices");
  for (let i=0; i < choices.length; i++) {
    //console.log(choices[i]);
    let btn = document.createElement("button");
    btn.innerHTML = choices[i];

    btn.addEventListener("click", function(e) {
      //console.log(e.target);
      //console.log(questions[index].correct);
      //console.log("e.target", e.target.value); returned empty
      let userAnswer = e.target;
      console.log("userAnswer", userAnswer);
      let correctAnswer = questions[index].correct;
      console.log("correctAnswer", correctAnswer);
      let score = 0;
      if (userAnswer == correctAnswer) {
        console.log("correct!");
        score++
      }
      else {
        console.log("incorrect");
        //Need to decrease time here. 
      }
      
     });
    //This will allow the question choice options to appear
    choicesContainer.append(btn);
  }  
  
}

