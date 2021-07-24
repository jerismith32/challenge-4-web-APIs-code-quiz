let startQuiz = document.getElementById("startBtn");
let quizSection = document.getElementById("quiz");
let instructions = document.getElementById("instructions");

startQuiz.addEventListener('click', function (event) {

    console.log('quizSection')
    quizSection.classList.add("show");
    instructions.classList.add("hide");
    countdown();
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
        question: "How are you?",
        choices: ["Good", "Bad", "Happy", "Sad"],
        correct: "Good"
    },
    {
        question: "How are you??",
        choices: ["Good", "Bad", "Happy", "Sad"],
        correct: "Good"
    }
]

var index = 0;

function displayQuiz() {
//These are the main variables that will help keep track of the user's progress through the quiz
let questionContainer = document.getElementById("question");
console.log('asd', questions[index].question);
questionContainer.innerHTML = questions[0].question;

var choices = questions[index].choices
let choicesContainer = document.getElementById("choices");
for (let i=0; i < choices.length; i++) {
    console.log(choices[i]);
    let btn = document.createElement("button");
    btn.innerHTML = choices[i];
    choicesContainer.append(btn);

}

}
