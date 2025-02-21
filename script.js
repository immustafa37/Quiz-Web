// Quiz questions data
const quizData = [
    {
      question: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Terminal Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        choices: [
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
      },
      {
        question: "Which language is used for web apps?",
        choices: [
          "PHP",
          "Python",
          "JavaScript",
          "All of the above"
        ],
        answer: "All of the above"
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: [
          "<script>",
          "<js>",
          "<scripting>",
          "<javascript>"
        ],
        answer: "<script>"
      },
      {
        question: "How do you create a function in JavaScript?",
        choices: [
          "function = myFunction()",
          "function:myFunction()",
          "function myFunction()",
          "def myFunction()"
        ],
        answer: "function myFunction()"
      },
      {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        choices: [
          "-",
          "=",
          "*",
          "x"
        ],
        answer: "="
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        choices: [
          "<br>",
          "<lb>",
          "<break>",
          "<lnbr>"
        ],
        answer: "<br>"
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        choices: [
          "font",
          "styles",
          "class",
          "style"
        ],
        answer: "style"
      }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedAnswer = null;
    
    const questionEl = document.getElementById("question");
    const choicesEl = document.getElementById("choices");
    const nextBtn = document.getElementById("next-btn");
    const progressBar = document.getElementById("progress-bar");
    const quizBox = document.getElementById("quiz-box");
    const resultBox = document.getElementById("result-box");
    const scoreEl = document.getElementById("score");
    const restartBtn = document.getElementById("restart-btn");

// Load the first question
function loadQuestion() {
    const currentData = quizData[currentQuestionIndex];
    questionEl.textContent = currentData.question;
    choicesEl.innerHTML = "";
    selectedAnswer = null;
    nextBtn.disabled = true;
          