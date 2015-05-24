// Question 1

function selectElementsStartingWithE(array) {
  startsWithE = []
  for(var x = 0; x < array.length; x++){
    if(array[x][0] === "e"){
      startsWithE.push(array[x]);
    }
  }
  return startsWithE;
};

// Question 2

function selectElementsStartingWithVowel(array) {
  startsWithVowel = []
  for(var x = 0; x < array.length; x++){
    if(array[x][0].match(/[aeiou]/)){
      startsWithVowel.push(array[x]);
    }
  }
  return startsWithVowel;
};

// Question 3

function removeNullsFromArray(array) {
  noNulls = []
  for(var x = 0; x < array.length; x++){
    if(array[x] !== null){
      noNulls.push(array[x]);
    }
  }
  return noNulls;
};

// Question 4

function removeNullsAndFalseFromArray(array) {
  noNullsOrFalses = []
  for(var x = 0; x < array.length; x++){
    if((array[x] != null) && (array[x] != false)){
      noNullsOrFalses.push(array[x]);
    }
  }
  return noNullsOrFalses
};

// Question 5

function reverseEveryElementInArray(array) {
  reversed = []
  for(var x = 0; x < array.length; x++){
    reversed.push(array[x].split("").reverse().join(""));
  }
  return reversed;
};

// Question 6

function dropFirstThreeElements(array) {
  newArray = []
  for(var x = 3; x < array.length; x++){
    newArray.push(array[x]);
  }
  return newArray;
};

// Question 7

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {
  array.sort(function(x,y){
    xLetter = x.slice(-1);
    yLetter = y.slice(-1);
    return xLetter < yLetter ? -1 : xLetter > yLetter ? 1 : 0;
  })
  return array;
};

// Question 9

function returnFirstHalfOfString(string) {
  x = Math.ceil(string.length/2)
  return string.slice(0, x);
};

// Question 10

function makeNumberNegative(number) {
  return number < 0 ? number : -number
};
