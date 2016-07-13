// Get the Sequence elements
var sequenceElement1 = document.getElementById("sequence1");

// Place your Sequence options here to override defaults
// See: https://github.com/IanLunn/Sequence/blob/v2/DOCUMENTATION.md
var options = {
  keyNavigation: true,
  animateCanvas: false
}

// Launch Sequence on the elements, and with the options we specified above
var mySequence1 = sequence(sequenceElement1, options);

function updateButtons(buttons, text) {

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.innerHTML = text;
  }
}

mySequence1.stopped = function() {
  updateButtons(mySequence1.$autoPlay, "Start");
}

mySequence1.started = function() {
  updateButtons(mySequence1.$autoPlay, "Stop");
}
