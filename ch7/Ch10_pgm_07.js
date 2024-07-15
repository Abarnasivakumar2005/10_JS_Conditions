var getQuiz = function () {
  var score = 0,
      qIndex = 0,
      inPlay = true,
      questions,
      next,
      getQuestion,
      checkAnswer,
      submit,
      getHint; // New function to get hints
    
  questions = [
      {
          question: "What is the highest mountain in the world?",
          answer: "Everest",
          hint: "It's located in the Himalayas."
      },
      {
          question: "What is the highest mountain in Scotland?",
          answer: "Ben Nevis",
          hint: "It's the highest point in the UK."
      }
  ];
  
  next = function () {
      qIndex = qIndex + 1;
      
      if (qIndex >= questions.length) {
          inPlay = false;
          console.log("You have finished the quiz.");
      }
  };
  
  getQuestion = function () {
      if (inPlay) {
          return questions[qIndex].question;
      } else {
          return "You have finished the quiz.";
      }
  };
  
  checkAnswer = function (userAnswer) {
      if (userAnswer === questions[qIndex].answer) {
          console.log("Correct!");
          score = score + 1;
      } else {
          console.log("No, the answer is " + questions[qIndex].answer);
      }
  };
  
  getHint = function () {
      if (inPlay) {
          return questions[qIndex].hint;
      } else {
          return "You have finished the quiz.";
      }
  };
  
  submit = function (userAnswer) {
      var message = "You have finished the quiz.";
      
      if (inPlay) {
          checkAnswer(userAnswer);
          next();
          message = "Your score is " + score + " out of " + qIndex;
      }
        
      return message;
  };
  
  return {
      quizMe: getQuestion,
      submit: submit,
      helpMe: getHint // Add the helpMe property
  };
};

var quiz = getQuiz();

/* Further Adventures
*
* 1) Run the program.
*
* 2) Take the quiz, using the quiz.quizMe and
*    quiz.submit methods.
*    
*    > quiz.quizMe()
*      What is the highest mountain in the world?
*    > quiz.submit("K2")
*
* 3) Use the hint feature:
*    > quiz.helpMe()
*      It's located in the Himalayas.
*
* 4) Add more questions with hints, run the program, and take the quiz again.
*/
