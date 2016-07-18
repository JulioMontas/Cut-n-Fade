// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

// Change Sequence's default options
var options = {
  keyNavigation: true,
  animateCanvas: false,
  phaseThreshold: false,
  reverseWhenNavigatingBackwards: true
};

// Initiate Sequence
var sequence1 = sequence(sequenceElement, options);



function updateButtons(buttons, text) {

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.innerHTML = text;
  }
}

// mySequence1.stopped = function() {
//   updateButtons(mySequence1.$autoPlay, "Start");
// }
//
// mySequence1.started = function() {
//   updateButtons(mySequence1.$autoPlay, "Stop");
// }
