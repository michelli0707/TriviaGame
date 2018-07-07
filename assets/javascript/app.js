
var answers = [["Brazil", "Italy", "Germany", "France"], ["USA", "Brazil", "Japan", "Sweden"], ["Luxembourg", "Germany", "China", "Japan"], ["Jeff Bezos USA, Bill Gates USA, Warren Buffett USA", "Jeff Bezos USA, Bill Gates USA, Michael Bloomberg USA", "Mark Zuckerberg USA, Amancio Ortega Spain, Carlos Slim Mexico", "Bernard Arnault France, Amancio Ortega Spain, Carlos Slim Mexico"]];
var listOfCorrectAnswers = ["Brazil", "USA", "Luxembourg", "Jeff Bezos USA, Bill Gates USA, Warren Buffett USA"];
var listOfQuestions = ["1. Which country has won the most world cups?", "2. Which country has won the most women's world cup?", "3. Which country has the highest GDP per capita in the world?", "4. Top 3 richest people in the world in 2018:",];

var numQuestions = document.getElementsByClassName("Questions");
var numAnswers = document.getElementsByClassName("Answers");
var submitButton = document.getElementById("submitanswers");
var questionElement = document.getElementById("Question");
var questionCount = 0;
var score = 0;

function startButton() {
	
	document.getElementById("score").innerHTML = score;
	var startClass = document.getElementById("startbutton").className;
	if (startClass == "start") {
		
		document.getElementById("thinker").style.width = "0px";
        document.getElementById("thinker").style.height = "0px";
	    document.getElementById("startbutton").style.visibility = "hidden";
		
	    document.getElementById("preScore").style.visibility = "visible";
	    document.getElementById("theScore").style.visibility = "visible";
		// show questions and answers
		showQuestionsAndAnswers();
	}
}
function showQuestionsAndAnswers() {
	questionElement.innerHTML = listOfQuestions[questionCount];
	document.getElementById("Question").style.visibility = "visible";
	document.getElementById("1").innerHTML = answers[questionCount][0];
	document.getElementById("2").innerHTML = answers[questionCount][1];
	document.getElementById("3").innerHTML = answers[questionCount][2];
	document.getElementById("4").innerHTML = answers[questionCount][3];
	for(var i =0; i<numAnswers.length; i++) {
		numAnswers[i].style.visibility = "visible";
	}
}

function checkAnswer(number) {
	questionCount++;
		for(var i =0; i<numAnswers.length; i++) {
				numAnswers[i].style.visibility = "false";
			}
		var answer = document.getElementById(number).innerHTML;
		if (listOfCorrectAnswers.indexOf(answer) != -1) {
			score ++;
		}
		document.getElementById("score").innerHTML = score;
	if (questionCount<4) {
		showQuestionsAndAnswers();
		document.getElementById(number).blur();
	} else {
		setTimeout(function() {
            alert("You scored " + score + " out of 4.");
		}, 4);
	}
}

