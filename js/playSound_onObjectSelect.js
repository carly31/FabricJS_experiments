
//::START
var canvas = new fabric.Canvas('can', {
  backgroundColor: 'rgb(255,255,255)',
  selectionColor: 'lightgray',
  selectionLineWidth: 2,
  selection: false
});


//Sound
var Sound = {
    playMove: function() {
        var sound = new Audio('media/move.wav');
        sound.play();
    }
};

var circle = new fabric.Circle({
  radius: 20, fill: 'green', left: 100, top: 100
});

canvas.add(circle);


circle.on('selected', function(options) {
	Sound.playMove();
});

/*
canvas.on('mouse:down', function(options) {
  
	Sound.playMove();

});
*/
