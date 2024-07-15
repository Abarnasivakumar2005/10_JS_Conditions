var getGuesser = function () {
  var secret = 8; // Secret number is local to this function

  return function (userNumber) {
    if (userNumber === secret) {
      console.log("Well done!");
    } else {
      console.log("Unlucky, try again.");
    }
  };
};

var guess = getGuesser(); // Returns the inner function with access to 'secret'

/* 
Further Adventures
1) Run the program.
 - The 'getGuesser' and 'guess' variables are now available globally.

2) At the prompt, type 'getGuesser' and press Enter.
 - This will show that 'getGuesser' is a function.

3) At the prompt, type 'guess' and press Enter.
 - This will display the function that can check guesses.

4) At the prompt, type 'secret' and press Enter.
 - You will see an error or undefined, as 'secret' is not accessible outside 'getGuesser'.
*/
