var getGuesser = function (range, offset) {
  var secret = Math.floor(Math.random() * range + offset); // Random number from offset to (offset + range)

  return function (userNumber) {
      if (userNumber === secret) {
          return "Well done!";
      } else if (userNumber > secret) {
          return "Too high!";
      } else {
          return "Too low!";
      }
  };
};

var guess = getGuesser(20, 5); // Random numbers from 5 to 24

/* Further Adventures
*
* 1) Run the program and test the game.
* 2) Try different values for range and offset.
*    e.g. getGuesser(30, 10) will choose from 10 to 39.
*/
