var secret = 8;

var guess = function (userNumber) {
  if (userNumber !== secret) {
    console.log("Unlucky, try again.");
  } else {
    console.log("Well done!");
  }
};

/* 
Further Adventures
1) Run the program and try a few guesses at the prompt. e.g. guess(2)
2) The condition now checks if the guess is not equal to the secret.
3) Run and test the updated program.
4) The messages have been adjusted to fit the new condition.
*/
