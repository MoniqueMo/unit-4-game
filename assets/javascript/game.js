$(document).ready(function() {
var yourScore = 0;
var wins = 0;
var loses = 0;

var tNumbers = Math.floor(Math.random() * 102 + 19);
  $("#targetnumber").text(tNumbers);
  console.log(tNumbers);
  var c1Numbers = Math.floor(Math.random() * 12 + 1);
  var c2Numbers = Math.floor(Math.random() * 12 + 1);
  var c3Numbers = Math.floor(Math.random() * 12 + 1);
  var c4Numbers = Math.floor(Math.random() * 12 + 1);

  function win() {
    alert("You win! Take my " + tNumbers + " Crystals");
    wins++;
    $("#win").text(wins);
    reset();
  }
  function loss() {
    alert("Sorry! You lose!");
    loses++;
    $("#lose").text(loses);
    reset();
  }

  $("#cr1").on("click", function() {
    yourScore = yourScore + c1Numbers;
    $("#score").text(yourScore);
    if (yourScore == tNumbers) {
      win();
    } else if (yourScore > tNumbers) {
      loss();
    }
  });
  $("#cr2").on("click", function() {
    yourScore = yourScore + c2Numbers;
    $("#score").text(yourScore);
    if (yourScore == tNumbers) {
      win();
    } else if (yourScore > tNumbers) {
      loss();
    }
  });
  $("#cr3").on("click", function() {
    yourScore = yourScore + c3Numbers;
    $("#score").text(yourScore);
    if (yourScore == tNumbers) {
      win();
    } else if (yourScore > tNumbers) {
      loss();
    }
  });
  $("#cr4").on("click", function() {
    yourScore = yourScore + c4Numbers;
    $("#score").text(yourScore);
    if (yourScore == tNumbers) {
      win();
    } else if (yourScore > tNumbers) {
      loss();
    }
  });

  function reset() {
    tNumbers = Math.floor(Math.random() * 102 + 19);
    $("#targetnumber").text(tNumbers);
    c1Numbers = Math.floor(Math.random() * 12 + 1);
    c2Numbers = Math.floor(Math.random() * 12 + 1);
    c3Numbers = Math.floor(Math.random() * 12 + 1);
    c4Numbers = Math.floor(Math.random() * 12 + 1);
    yourScore = 0;
    $("#score").text(yourScore);
  }

//random toal amount revealed of crystals at beginning of the game
//a game with 4 crystals 
// each crystal need to have a random number between 1 - 12
//random number should be between 19 - 120
//a new random number should be regenerated every single time we win or lose.
//to those 4 crystals
//when click on any crystal, random numbers should begin to add to eachother
//numbers should add until they match provided given amount or when it goes over the given amount.
//until it equals tthe Random Result. 
//if it is greater than the random result, we lose and decrement a lost counter until game over. No more lived left.
//if it is equal, then we increment a win counter
});