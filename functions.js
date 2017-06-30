// TODO: add your solutions here!

//These are examples
var absoluteVale = Math.abs(-4);

var fourSquared = Math.pow(4,2);

var roundedToNearestInterger = Math.round(1.22343);



//make a function to combine two words. Words in () are two variables word1, word2)
function combineWords(word1, word2) {
	//need to create a new variable that concatinates the words with +.
    //results is a local variable
	var results = word1+word2;
	console.log(results);
	return results;
}
//Display an argument phrase to the console n times
//define the function
function repeat (phrase, nTimes){
//for loops (initial value of i; go until this is met; increment i)
    for (i=0 ; i<nTimes; i++){
     console.log (phrase)
    }
};
//----------------------------------------------------------------------------

//Return a number power without using math functions

//define the function
//for the argument we need to know what number and what power
function numberToPowerN (number, nPower ){
    var result = number * nPower;
   console.log(result);
    return result;
};

//---------------------------------------------------------------

//Return the area of a circle given the radius

//define the function
// arguments needed is radius of circle and
function areaOfCircle(radius){
   let squared = Math.pow(radius,2);
   let answer = squared * 3.14;
   console.log(answer);
   return answer;
};

//Pythagorean theorem
//1) define the function 2) what are the arguments
//a(squared) + b (squared) = c(squared)
//return c given a and b

function pyTheo(sideA, sideB) {
    let answer = Math.pow(sideA, 2) + Math.pow(sideB, 2);
    let cSquared = Math.pow(answer,2);
    console.log(cSquared);
    return cSquared;
}

// Is X Evenly div by Y?

// return boolean value if x is div by y without remainders

// is true X % Y = 0

function xDivYEven (x, y){

		var answer;
		if ( x % y === 0 ){
	    answer = true;
  }else {answer = false;}
  return answer;
}
var result= xDivYEven(9,3);

console.log(result);


/*if (answer === true) {
        console.log("Can I haz ur Cheezburger?");
    } else {
        console.log("Y no Cheezburger?");
    } */
