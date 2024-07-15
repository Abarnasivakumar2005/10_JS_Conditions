var getGuesser = function () {
  var secret = Math.floor(Math.random() * (50 - 30 + 1)) + 30; // Random number between 30 and 50

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else {
      return "Unlucky, try again.";
    }
  };
};

var guess = getGuesser();

// Further Adventures
// 1) Run the program.
// 2) Play the game a few times on the console.
//    e.g. guess(32)
// 3) Change the code so the secret number is between 30 and 50.

// CHALLENGE: Create a function called 'between'
var between = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Random number between min and max
};

// Example usage of the 'between' function
console.log(between(1, 5));      // Random number between 1 and 5
console.log(between(100, 200));  // Random number between 100 and 200
