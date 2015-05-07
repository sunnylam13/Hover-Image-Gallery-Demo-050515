jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES

// create a new TimelineMax sequencing object
var tm1 = new TimelineMax({repeat:-1,yoyo:true});
// var tm1 = new TimelineMax({repeat:-1});

//////////////////////////////////////////////////
// FUNCTIONS

function hoverAnimateImage1 (targetE,tmObj) {
	// where targetE = the target element, typically a jQuery selector
	
	console.log('Hover animation 1 initiated...');

	// store a reference to the target
	var $target = $(targetE);

	tmObj.yoyo(true);
	// tmObj.staggerTo($target,1,{css:{transform:'translateZ(32px)'}, ease:Power0.easeOut},0.2);
	// tmObj.staggerTo($target,1,{css:{transform:'translateZ(0px)'}, ease:Power0.easeOut},0.2);
	// tmObj.staggerTo($target,2,{css:{transform:'translateZ(32px)'}, ease:Power0.easeOut},1);
	// tmObj.staggerTo($target,2,{css:{transform:'translateZ(0px)'}, ease:Power0.easeOut},1);
	// add the other dimensions and keep them at 0
	// tmObj.staggerTo($target,1,{css:{transform:'translateX(0) translateY(0) translateZ(15px)'}, ease:Power0.easeOut},0.2);
	// tmObj.staggerTo($target,1,{css:{transform:'translateX(0) translateY(0) translateZ(0px)'}, ease:Power0.easeOut},0.1);
	tmObj.staggerTo($target,1.6,{css:{transform:'translateX(0) translateY(0) translateZ(15px)'}, ease:SlowMo.easeOut},0.2);
	tmObj.staggerTo($target,1.6,{css:{transform:'translateX(0) translateY(0) translateZ(0px)'}, ease:SlowMo.easeOut},0.2);

	tmObj.play();

}


//////////////////////////////////////////////////
// EXECUTION CODE

// targeting the animation at the image weirdly doesn't work...  is it due to the position absolute or static?
// hoverAnimateImage1('li.valley_winds div.scene img.component_img');
// hoverAnimateImage1('div.scene img.component_img',tm1);
hoverAnimateImage1('div.scene div.vlak_0,div.scene div.vlak_1',tm1);
// hoverAnimateImage1('div.scene div.vlak_0 img,div.scene div.vlak_1 img',tm1);

//////////////////////////////////////////////////

});  //end doc.onready function
