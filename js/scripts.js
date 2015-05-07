jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES

// create a new TimelineMax sequencing object
var tm = new TimelineMax({repeat:-1,yoyo:true});

//////////////////////////////////////////////////
// FUNCTIONS

function hoverAnimateImage1 (targetE) {
	// where targetE = the target element, typically a jQuery selector
	
	// store a reference to the target
	var $target = $(targetE);

	tm.yoyo(true);
	tm.staggerTo($target,2,{css:{transform:'translateZ(5px)'}, ease:Power0.easeOut},1);
	tm.staggerTo($target,2,{css:{transform:'translateZ(0px)'}, ease:Power0.easeOut},1);
	// tm.staggerTo($target,0.5,{translateX:5, ease:Power2.easeIn, overwrite:'all'},0.6);

	// tm.to($target,0.5,{rotateX:180, z:-300, ease:Power2.easeIn, overwrite:'all'});

	tm.play();

}


//////////////////////////////////////////////////
// EXECUTION CODE

// hoverAnimateImage1('li.valley_winds div.scene img.component_img');
hoverAnimateImage1('div.scene img.component_img');

//////////////////////////////////////////////////

});  //end doc.onready function
