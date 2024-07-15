var getGuesser = function () {
  var secret = Math.floor(Math.random() * 10 + 1); // Random number between 1 and 10

  return function (userNumber) {
      if (userNumber < secret) {
          return "Too low!";
      } else if (userNumber > secret) {
          return "Too high!";
      } else {
          return "Well done!";
      }
  };
};

var guess = getGuesser();

/* Further Adventures
*
* 1) Run the program
*
* 2) Play the game a few times.
*    e.g. guess(2)
*
* 3) Update the second condition to (userNumber < secret).
*
* 4) Update the messages to match the new condition.
*
* 5) Swap the first and second conditions so
*    the second condition uses the strict equality operator.
*
* 6) Update the messages to match the new condition.
*/
