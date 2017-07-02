//These are examples
var absoluteVale = Math.abs(-4);

var fourSquared = Math.pow(4, 2);

var roundedToNearestInterger = Math.round(1.22343);


// 1 . =======================================================================
//make a function to combine two words. Words in () are two variables word1, word2)
function combineWords(word1, word2) {
  //need to create a new variable that concatinates the words with +.
  //results is a local variable
  var results = word1 + word2;
  console.log(results);
  return results;
}
// 2 . =======================================================================
//Display an argument phrase to the console n times
//define the function
function repeat(phrase, nTimes) {
  //for loops (initial value of i; go until this is met; increment i)
  for (i = 0; i < nTimes; i++) {
    console.log(phrase)
  }
};
// 3 . =======================================================================
//Return a number power without using math functions

//define the function
//for the argument we need to know what number and what power
function numberToPowerN(number, nPower) {
  var result = number * nPower;
  console.log(result);
  return result;
};

// 4 . =======================================================================

//Return the area of a circle given the radius

//define the function
// arguments needed is radius of circle and
function areaOfCircle(radius) {
  let squared = Math.pow(radius, 2);
  let answer = squared * 3.14;
  console.log(answer);
  return answer;
};

// 5 . =======================================================================
//Pythagorean theorem
//1) define the function 2) what are the arguments
//a(squared) + b (squared) = c(squared)
//return c given a and b

function pyTheo(sideA, sideB) {
  let answer = Math.pow(sideA, 2) + Math.pow(sideB, 2);
  let cSquared = Math.pow(answer, 2);
  console.log(cSquared);
  return cSquared;
}
// 6. =========================================================================
// Is X Evenly div by Y?

// return boolean value if x is div by y without remainders

// is true X % Y = 0

function xDivYEven(x, y) {

  var answer;
  if (x % y === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
var result = xDivYEven(9, 3);

console.log(result);

// 7 . =======================================================================

//how many vowels are in a given word?

//vowels are "a", "e", "i", "o", "u", "y"

//create a function that goes through each letter in a given word and count how many vowels in the word.

function numOfVowels(word) {
  var count = 0; //starts off the count
  //create a for loop that will go through each letter of the word ..
  for (var i = 0; i < word.length; i++) {
    // compare letters in word to vowels
    if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' || word[i] === 'y') {
      // increase count by 1.
      count++;
    }
  }
  console.log(count);
  return count;
}
// call function example: numOfVowels ("Noah");

// 8 . =======================================================================

function fdiWdi(phrase) {
  //go through each index and look for string 'wdi'
  for (var i = 0; i < phrase.length; i++) {
    if (phrase[i] === "wdi") { // is equal exactly to 'wdi'
      console.log(true);
      return true;
    }
  console.log(false); //if array does not have 'wdi'
  return false;
}
// call function example: fdiWdi ("Noah", "wdi", 1, true);


// 9 . =======================================================================
// longest word in a sentence

//10. =============================
// triangle.
function printTriangle(length) { //create the function
	for(var i = 1; i <= length; i++) {
    /* setting up the tier
    Statement 1 sets a variable for where the loop starts (var i = 1).
    Statement 2 defines the condition for the loop to run (i must be less than the length).
    Statement 3 increases a value (i++ or +1) each time the code block in the loop has been executed.
    */
		var tier = '';// create an emtpy string for for tier

		for(var j = 0; j < i; j++) {
      /*
      Statement 1 sets a variable for where the loop starts (var j = 0).
      Statement 2 defines the condition for the loop to run (j<i).
      Statement 3 increases a value (i++ or +1) each time the code block in the loop has been executed.
       */

			tier += '*';
		}

		console.log(tier);
	}
}
