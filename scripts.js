var storyObject = {
	story: "",
	image: "",
	audio: "",
	choice1: { newPageID: 0, label: "" },
	choice2: { newPageID: 0, label: "" }
};

storyObject.story = myData[0].story;
/*storyObject.image = myData[0].imageURL;*/
storyObject.audio = myData[0].audio;
storyObject.choice1 = myData[0].choice1;
storyObject.choice2 = myData[0].choice2;

/*PLAY AUDIO*/
var sound = new Audio(storyObject.audio);
sound.play();

/*COMMENTED OUT IMAGES BECAUSE I NEED TO UNDERSTAND THAT AND THEY ARE STOPING OPTIONS FROM WORKING*/

document.getElementById("story").innerHTML = storyObject.story;
/*document.getElementById("image").innerHTML = storyObject.image;*/
document.getElementById("option1").innerHTML = storyObject.choice1.label;
document.getElementById("option2").innerHTML = storyObject.choice2.label;

function option1() {
	var newOption = storyObject.choice1.newPageID;
	storyObject.story = myData[newOption].story;
	/*storyObject.image = myData[newOption].imageURL;*/
	storyObject.audio = myData[newOption].audio;
	storyObject.choice1 = myData[newOption].choice1;
	storyObject.choice2 = myData[newOption].choice2;

	document.getElementById("story").innerHTML = storyObject.story;
	/*document.getElementById("image").innerHTML = storyObject.image;*/
	document.getElementById("option1").innerHTML = storyObject.choice1.label;
	document.getElementById("option2").innerHTML = storyObject.choice2.label;

	var sound = new Audio(storyObject.audio);
	sound.play();
}

function option2() {
	var newOption = storyObject.choice2.newPageID;
	storyObject.story = myData[newOption].story;
	/*storyObject.image = myData[newOption].imageURL;*/
	storyObject.audio = myData[newOption].audio;
	storyObject.choice1 = myData[newOption].choice1;
	storyObject.choice2 = myData[newOption].choice2;

	document.getElementById("story").innerHTML = storyObject.story;
	/*document.getElementById("image").innerHTML = storyObject.image;*/
	document.getElementById("option1").innerHTML = storyObject.choice1.label;
	document.getElementById("option2").innerHTML = storyObject.choice2.label;

	var sound = new Audio(storyObject.audio);
	sound.play();
}
