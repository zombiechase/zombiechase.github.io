var sounds = new Array(new Audio("/audio/1_callout.m4a"), new Audio("/audio/17_yes.m4a"), new Audio("/audio/18_no.m4a"));
var i = -1;
playSnd();

function playSnd() {
	i++;
	if (i == sounds.length) return;
	sounds[i].addEventListener('ended', playSnd);
	sounds[i].play();
}

var storyObject = {
	story: "",
	image: "",
	choice1: { newPageID: 0, label: "" },
	choice2: { newPageID: 0, label: "" }
};

storyObject.story = myData[0].story;
storyObject.image = myData[0].imageURL;
storyObject.choice1 = myData[0].choice1;
storyObject.choice2 = myData[0].choice2;

document.getElementById("story").innerHTML = storyObject.story;
/*document.getElementById("image").innerHTML = storyObject.image;*/
document.getElementById("option1").innerHTML = storyObject.choice1.label;
document.getElementById("option2").innerHTML = storyObject.choice2.label;


function option1() {
	var newOption = storyObject.choice1.newPageID;
	storyObject.story = myData[newOption].story;
	/*storyObject.image = myData[newOption].imageURL;*/
	storyObject.choice1 = myData[newOption].choice1;
	storyObject.choice2 = myData[newOption].choice2;

	document.getElementById("story").innerHTML = storyObject.story;
	/*document.getElementById("image").innerHTML = storyObject.image;*/
	document.getElementById("option1").innerHTML = storyObject.choice1.label;
	document.getElementById("option2").innerHTML = storyObject.choice2.label;
}

function option2() {
	var newOption = storyObject.choice2.newPageID;
	storyObject.story = myData[newOption].story;
	/*storyObject.image = myData[newOption].imageURL;*/
	storyObject.choice1 = myData[newOption].choice1;
	storyObject.choice2 = myData[newOption].choice2;

	document.getElementById("story").innerHTML = storyObject.story;
	/*document.getElementById("image").innerHTML = storyObject.image;*/
	document.getElementById("option1").innerHTML = storyObject.choice1.label;
	document.getElementById("option2").innerHTML = storyObject.choice2.label;
}

