var myData = [{
      id: 0,
  		story: "You call out for your dog in the back yard to come inside but he does not come in. You start to wonder where he could be. Do you go look for him?",
  		imageURL: "images/page0.png",
  		audio: "/audio/1_callout.m4a",
    	choice1:
      		{newPageID: 2, label: "Yes"},
    	choice2:
      		{newPageID: 1, label: "No"}  		
  	},
    {
      id: 1,
      story: "You decide to go to bed and hope he shows up in the morning.  You hear sounds outside. Do you go look?",
      imageURL: "images/page1.png",
      audio: "/audio/2_goToBed.m4a",
      choice1:
          {newPageID: 2, label: "Yes"},
      choice2:
          {newPageID: 3, label: "No"}
    },
    {
      id: 2,
      story: "You walk out to the back yard and call out for your dog. Here boy!  You hear barking down the street, but you think it is moving away from you. Do you go down the street?",
      imageURL: "images/page2.png",
      audio: "audio/audio2.mp3",
      choice1:
          {newPageID: 5, label: "Yes"},
      choice2:
          {newPageID: 4, label: "No"}     
    },
    {
      id: 3,
      story: "A window breaks downstairs and you hear growling, you call out “Willie is that you?” but only more growling. You get out of bed and go see what it is. Oh no! you have been eaten by a zombie! The End.",
      imageURL: "images/page3.png",
      audio: "audio/audio2.mp3",
      choice1:
          {newPageID: 14, label: "End Game"},
      choice2:
          {newPageID: 14, label: ""}     
    },
    {
      id: 4,
      story: "You go back inside the house because it is dark.  You feel safe inside but soon you hear growling.  You call out Willie? but no answer you slowly open the door only to have it pushed open and see a Zombie at your door! You have been caught and eaten by a zombie! The End.",
      imageURL: "images/page4.png",
      audio: "audio/audio2.mp3",
      choice1:
          {newPageID: 14, label: "End Game"},
      choice2:
          {newPageID: 14, label: ""}     
    },
    {
      id: 5,
      story: "You grab a flashlight and head down the street. As you pass the house next door you hear a rustling sound coming from the bushes. Do you hide?",
      imageURL: "images/page2.jpg",
      audio: "audio/audio2.mp3",
      choice1:
          {newPageID: 7, label: "Yes"},
      choice2:
          {newPageID: 6, label: "No"}     
    },
    {
      id: 6,
      story: "You decide to investigate. You turn on your flashlight and shine it at the bushes. MEOW! Phew it was just a cat. You turn around and come face to face with a Zombie. The Zombie eats you. The End.",
      imageURL: "images/page6.png",
      audio: "audio/audio2.mp3",
      choice1:
          {newPageID: 14, label: "End Game"},
      choice2:
          {newPageID: 14, label: ""}     
    },
    {
      id: 7,
      story: "You duck behind a parked car. Just as a cat runs out from behind the bush and is grabbed by a Zombie. You see a gate open to your left and a street on the right. Which way should you go? Do you go down the street?",
      imageURL: "images/page2.jpg",
      audio: "audio/audio2.mp3",
      choice1:
          {newPageID: 9, label: "Yes"},
      choice2:
          {newPageID: 8, label: "No"}     
    },
    {
      id: 8,
      story: "You walk through the gate. The gate leads to the city park. You look for somewhere to hide. There are only swings and a few trees in this park. Do you climb a tree?",
      imageURL: "images/page2.jpg",
      audio: "audio/audio2.mp3",
      choice1:
          {newPageID: 11, label: "Yes"},
      choice2:
          {newPageID: 10, label: "No"}      
    },
    {
      id: 9,
      story: "You rush for the empty street. You are not fast enough. A Zombie grabs you and eats you. The End.",
      imageURL: "images/page9.png",
      audio: "audio/audio2.mp3",
      choice1:
          {newPageID: 14, label: "End Game"},
      choice2:
          {newPageID: 14, label: ""}     
    },
    {
      id: 10,
      story: "You try to hide behind the swings. The zombie finds you and eats you. The End.",
      imageURL: "images/page10.png",
      audio: "audio/audio2.mp3",
      choice1:
          {newPageID: 14, label: "End Game"},
      choice2:
          {newPageID: 14, label: ""}     
    },
    {
      id: 11,
      story: "You climb a big tree and hide in the branches. The zombie passes by and leaves the park. From the top of the tree you can see a tail poking out from behind a tree. Do you call for Willie?",
      imageURL: "images/page2.jpg",
      audio: "audio/audio2.mp3",
      choice1:
          {newPageID: 13, label: "Yes"},
      choice2:
          {newPageID: 12, label: "No"}      
    },
    {
      id: 12,
      story: "You return home, sad that you never found your dog. You are so sad you don't see the Zombie on your front porch. He eats you. The End.",
      imageURL: "images/page12.png",
      audio: "audio/audio2.mp3",
      choice1:
          {newPageID: 14, label: "End Game"},
      choice2:
          {newPageID: 14, label: ""}     
    },
    {
      id: 13,
      story: "You found Willie!  He runs to your arms happily licking you and find out that there is a movie studio filming a movie in town.  No wonder you saw all those strange creatures walking everywhere. The End.",
      imageURL: "images/page2.jpg",
      audio: "audio/audio2.mp3",
      choice1:
          {newPageID: 14, label: "Congratulations You Win!"},
      choice2:
          {newPageID: 14, label: "End Game"}     
    },
    {
      id: 14,
      story: "",
      imageURL: "",
      audio: "",
      choice1:
          {newPageID: 0, label: "Return to Start"},
      choice2:
          {newPageID: 0, label: ""}     
    }
];
