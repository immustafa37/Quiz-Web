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
  const feedbackEl = document.getElementById("feedback");
  
  // Load the first question
  function loadQuestion() {
    const currentData = quizData[currentQuestionIndex];
    questionEl.textContent = currentData.question;
    choicesEl.innerHTML = "";
    feedbackEl.textContent = "";
    selectedAnswer = null;
    nextBtn.disabled = true;
  
    currentData.choices.forEach(choice => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = choice;
      button.className = "choice-btn";
      button.addEventListener("click", () => selectAnswer(button, currentData.answer));
      li.appendChild(button);
      choicesEl.appendChild(li);
    });
    
    updateProgress();
  }
  
  // Handle answer selection
  function selectAnswer(button, correctAnswer) {
    // Remove previous selection and feedback
    document.querySelectorAll(".choice-btn").forEach(btn => btn.classList.remove("selected"));
    feedbackEl.textContent = "";
    
    // Mark the selected button
    button.classList.add("selected");
    selectedAnswer = button.textContent;
    
    // Enable Next button only if the answer is correct; if wrong, show feedback and disable next button.
    if (selectedAnswer === correctAnswer) {
      nextBtn.disabled = false;
    } else {
      nextBtn.disabled = true;
      handleWrongAnswer();
    }
  }
  
  // Function to handle wrong answer selection
  function handleWrongAnswer() {
    // Here you can expand the functionality. For example, you can display a message,
    // deduct points, or highlight the correct answer after several attempts.
    feedbackEl.textContent = "Incorrect! Please try again.";
  }
  
  // Update progress bar
  function updateProgress() {
    const progressPercent = ((currentQuestionIndex) / quizData.length) * 100;
    progressBar.style.width = progressPercent + "%";
  }
  
  // Handle Next button click
  nextBtn.addEventListener("click", () => {
    // Check if the selected answer is correct (it must be, since nextBtn is enabled only then)
    if (selectedAnswer === quizData[currentQuestionIndex].answer) {
      score++;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  });
  
  // Show final results
  function showResults() {
    progressBar.style.width = "100%";
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `You scored ${score} out of ${quizData.length}`;
  }
  
  // Restart quiz
  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    quizBox.classList.remove("hidden");
    resultBox.classList.add("hidden");
    loadQuestion();
  });
  
  // Initial call to load the quiz
  loadQuestion();  