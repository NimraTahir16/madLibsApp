<!DOCTYPE html>
<html>
<head>
	<title>mad libs</title>
</head>
<body>
<script type="text/javascript">
	


  /*let Story="Boom!! There was a massive collision. There was a loud deafening noise and dust covering the air. The dust settled and people saw there was absolute destruction. Two bogies of train had collied and there were bodies lying all around. Reporters came and started shooting while there were people asking for help and they could be saved";*/
"use strict";

window.onload = () => {
  // Total questions
  let questionTotal = 12;

  // Question Counter (which question are we on)
  let questionCounter = 0;

  // Test logic:
  let solicitation = `Please enter a`;
  let questionArray = [
     window.prompt("Enter a noun that is an act"),window.prompt("Enter a noun"),window.prompt("Enter a word that is noun and verb at a same time"),window.prompt("Enter a verb / collective noun"),window.prompt("Enter a noun"),window.prompt("Enter a noun"),window.prompt("Enter a verb"),window.prompt("Enter a noun that is plural"),window.prompt("Enter a collective noun"),window.prompt("Enter a verb"),window.prompt("Enter a verb or collective noun"),window.prompt("Enter a noun"),window.prompt("Enter a verb"),
  ];

  let userInputs = [];
  for (let i = questionTotal; i >= 0; i--) {
    // console.log(`The "i" of our "for" loop `);
    // console.log(i);
    // console.log("What question (of questionArray) is accessed (using questionCounter):");
    console.log(
      questionArray[questionCounter] + `... (${questionTotal} questions left)`
    );
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${questionTotal} questions left)`
      )
    );
    console.log(userInputs);
    questionCounter++;
   
    questionTotal--;
    
  }
  alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??');

  let originalStory =`<h2>Boom!! There was a massive ${userInputs[0]}. There was a loud deafening ${userInputs[1]}, dust covering the ${userInputs[2]}. The dust settled and ${userInputs[3]} saw there was absolute ${userInputs[4]}. Two ${userInputs[5]} of train had ${userInputs[6]} and there were ${userInputs[7]} lying all around. ${userInputs[8]} came and started ${userInputs[9]} while there were people ${userInputs[10]} asking for ${userInputs[11]} and they could be ${userInputs[12]}</h2>`;
  console.log(originalStory);

  console.log(originalStory);
  document.write(originalStory);
};
</script>
</body>
</html>
