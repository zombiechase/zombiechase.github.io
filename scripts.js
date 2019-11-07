/**************************************************
* Zombie Chase!
* Javascript file that will handle all of the logic
***************************************************/


//Initialize object that will store data for the page
var storyObject = {
	story: "",
	image: "",
	audio: "",
	choice1: { newPageID: 0, label: "" },
	choice2: { newPageID: 0, label: "" },
	currentScore: 0,
	topScores: [0, 0, 0, 0, 0]
};

//Initialize storyObject with the start of the story
storyObject.story = myData[21].story;
storyObject.image = myData[21].imageURL;
storyObject.audio = myData[21].audio;
storyObject.choice1 = myData[21].choice1;
storyObject.choice2 = myData[21].choice2;

//Fill the page with the current information in storyObject
document.getElementById("story").innerHTML = storyObject.story;
document.getElementById("image").src = storyObject.image;
document.getElementById("option1").innerHTML = storyObject.choice1.label;
document.getElementById("option2").innerHTML = storyObject.choice2.label;

//When choice 1 is selected, set the new ID
function option1() {
	//Get the id for the next page
	var newOption = storyObject.choice1.newPageID;

	//If game over, view end screen, otherwise show the next page
	if (newOption == 14) {
		//View end game screen
		endScreen(newOption);
	}
	else {
		//Call the fillPage function to fill the next page with the story
		fillPage(newOption);
	}
	//Make sure button is back to Play Audio
	document.getElementById("audioLabel").innerHTML = "Play Audio";
	//Scroll to top
	window.scrollTo(0, 0);
}

//When choice 2 is selected, fill page with the next part of the story
function option2() {
	//Get the id for the next page
	var newOption = storyObject.choice2.newPageID;
	
	//If game over, view end screen, otherwise show the next page
	if (newOption == 14) {
		//View end game screen
		endScreen(newOption);
	}
	else {
		//Call the fillPage function to fill the next page with the story
		fillPage(newOption);
	}
	//Make sure button is back to Play Audio
	document.getElementById("audioLabel").innerHTML = "Play Audio";
	//Scroll to top
	window.scrollTo(0, 0);
}

//Fill the page with the next part of the story based on the new page id
function fillPage(newOption) {
	//Get all of the information for the next page
	storyObject.story = myData[newOption].story;
	storyObject.image = myData[newOption].imageURL;
	storyObject.audio = myData[newOption].audio;
	storyObject.choice1 = myData[newOption].choice1;
	storyObject.choice2 = myData[newOption].choice2;
	
	if(newOption != 14 && newOption != 21 && newOption != 0) {
		storyObject.currentScore += 10;
		storyObject.story += "<p align='right'>Score: " + storyObject.currentScore;
	}

	//Fill the page with the new story information
	document.getElementById("story").innerHTML = storyObject.story;
	document.getElementById("image").src = storyObject.image;
	document.getElementById("option1").innerHTML = storyObject.choice1.label;
	document.getElementById("option2").innerHTML = storyObject.choice2.label;

	sound.pause();
	sound = new Audio(storyObject.audio);
}

//Plays the audio for the current page
var	sound = new Audio(storyObject.audio);


function playAudio() {
	var status = "";
	status = document.getElementById("audioLabel").innerHTML;

	if (status == "Play Audio") {
		sound.play();
		document.getElementById("audioLabel").innerHTML = "Stop Playing";
	} else {
		sound.pause();
		sound.currentTime = 0;
		document.getElementById("audioLabel").innerHTML = "Play Audio";
	}
};

//On game over, show the high score screen
function endScreen(newOption) {
	//Get all of the information for the next page
	storyObject.story = myData[newOption].story;
	storyObject.image = myData[newOption].imageURL;
	storyObject.audio = myData[newOption].audio;
	storyObject.choice1 = myData[newOption].choice1;
	storyObject.choice2 = myData[newOption].choice2;

	//Set top scores
	var scoreString = topScores();

	//Fill the page with the new story information
	document.getElementById("story").innerHTML = storyObject.story + scoreString;
	document.getElementById("image").src = storyObject.image;
	document.getElementById("option1").innerHTML = storyObject.choice1.label;
	document.getElementById("option2").innerHTML = storyObject.choice2.label;
}

//Creates the top scores string
function topScores() {
	//Add current score to the top scores, sort them, and only keep top 5
	storyObject.topScores.push(storyObject.currentScore);
	storyObject.topScores.sort(function(a, b){return b - a});
	if(storyObject.topScores.length > 5) {storyObject.topScores.pop();}

	//Create the top scores String
	var scores = "<h3>You scored " + storyObject.currentScore + " points! Well done.</h3><br>Your Top Scores:<br>";
	for (i=0; i<5; i++) {
		scores += (i+1) + ". " + storyObject.topScores[i] + "<br>";
	}
	scores += "<br>";
	storyObject.currentScore = 0;
	return scores;
}
