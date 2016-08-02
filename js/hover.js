
var canvas = new fabric.Canvas('can', {
  backgroundColor: 'rgb(100,100,200)',
  selectionColor: 'red',
  selectionLineWidth: 2,
  selection: false
});


var btn1=new Image();
var btn1o=new Image();

btn1.src="fs2/btn1.png";
btn1o.src="fs2/btn1o.png";


var imgContainer=new Image();
imgContainer.src="fs2/img0.png";

var img1=new Image();
img1.src="fs2/img1.png";


var imgInstance;

imgInstance = new fabric.Image(imgContainer, {
  left: 350,
  top: 70,
  selectable: false
});
canvas.add(imgInstance);
	
fabric.Image.fromURL(btn1.src, function(i) {
	i.id ="btn1";
	i.left = 30;
	i.top  = 70;		
	i.selectable = true;
	i.lockMovementX = true;
	i.lockMovementY = true;
	i.hasBorders = false;
	i.hasControls = false;
	canvas.add(i);
});	

canvas.on('mouse:over', function(options2) {
	
	switch(options2.target.id) {
		case "btn1":
			options2.target.setElement(btn1o);
			imgInstance.setElement(img1);
			break;		
	}
	
	canvas.renderAll();


});
canvas.on('mouse:out', function(options2) {	
	
	if (options2.target) {
		switch(options2.target.id) {
			case "btn1":
			console.log('OVER 1');
				options2.target.setElement(btn1);				
				break;
			
		}
		imgInstance.setElement(imgContainer);
		canvas.renderAll();
	} 
	
});

