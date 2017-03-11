$(document).ready(function() {

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	generateHTML();

	timerWrapper();

});

$("body").on("click", ".answer", function(event){
	
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {

		clearInterval(datClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(datClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}
//debug why correct answers wont match
function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}
// debug
function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}
// debug
function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	datClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(datClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

 //variable declarations seem to work down here, but not on top. ?
var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["It cost around $12,000 to open Supreme back in what year?", "Who was Supreme's first hire in 1994?", "Who was the first artist Supreme ever worked with?", "What fashion company filed suit against Supreme for putting box logo stickers on their 1994 Kate Moss ads?", "The Supreme motion logo is inspired by the title sequence of what 1990's movie?", "What Canadian fleece manufacturer used to make Supreme's hoodies, sweatshirts and fleeces?", "Supreme made 24-inch cruiser bikes with Brooklyn Machine Works in 2000. They were sold for how much a piece?", "As of 2012, James Jebbia's net worth is estimated at what amount?", "In 2009, brand manager/marketing director Angelo Baque was inspired by an Ollie Magazine photoshoot to build a _____ for the Supreme crew.", "Supreme's first official in-house lookbook wasn't until what year?"];
var answerArray = [["1990", "2002", "1994", "1997"], ["Diamond Supply Co.", "Calvin Klein", "Louis Vuitton", "Raf Simons"], ["Goodfellas", "Misery", "Days of Thunder", "The Godfather Part 3"], ["MEC","Herschel Supply Co.","Canada Goose","CYC"], ["$1,800", "$350", "$1,000", "$550"], ["$20 million", "$15 million", "$40 million", "$60 million"], ["Work Bench", "Sculpture", "Mini-Ramp", "Skateboard Rack"], ["2009", "2012", "1999", "2007"]];
var imageArray = ["<img class='center-block img-right' src=''>", "<img class='center-block img-right' src=''>", "<img class='center-block img-right' src=''>", "<img class='center-block img-right' src=''>", "<img class='center-block img-right' src=''>", "<img class='center-block img-right' src=''>", "<img class='center-block img-right' src=''>", "<img class='center-block img-right' src=''>"];
var correctAnswers = ["1994", "Gio Estevez", "Rammellzee", "Calvin Klein", "Goodfellas", "CYC", "$1,800", "$40 million", "Mini-Ramp", "2009"];
var questionCounter = 0;
var selecterAnswer;
var datClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;


