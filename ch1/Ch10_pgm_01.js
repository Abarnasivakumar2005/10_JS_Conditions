var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done!");
  } else if (userNumber > secret) {
    console.log("Too high!");
  } else {
    console.log("Too low!");
  }
};

/* 
Further Adventures
1) Click run.
2) Call the guess function at the prompt. e.g. guess(2)
3) Try a few different numbers as arguments.
4) The program checks if the guess is greater than the secret.
5) The message logged will say "Too high!" for high guesses and "Too low!" for low guesses.
6) Run and test the updated program.
*/
