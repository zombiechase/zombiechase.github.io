var data = JSON.parse(database);
console.log("Here is data" + data[0].story);
alert(data[0].story);


/*
var pageObject = {
	id: 1,
  	story: "You call out for your dog in the back yard to come inside but he does not come in. You start to wonder where he could be. Do you go look for him?",
  	imageURL: "images/page1.jpg",
  	audio: "audio/audio1.mp3",
    choice1: {
      			newPageID: 3,
      			onclick: "goToNewPage()",
      			label: "Yes"
    },
    choice2: {
    			newPageID: 2,
    			onclick: "goToNewPage()",
    			label: "No"
    }  		
}

function getJson(pageObject) {

}
*/