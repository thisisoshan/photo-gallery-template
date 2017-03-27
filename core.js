var myVar;
var count;
count=1;
var x;
function changeImage() {
	$("#wrapper").removeClass(x);
    count++;
    if (count > 4) {
    	count=1;
    };
    if (count == 1){
    	x="fadeInDown";
    }else if(count == 2){
    	x="bounceIn";
    }else if (count ==3) {
    	x="zoomIn";
    }else if(count ==4){
    	x="slideInUp";
    }
    setImage();
}

$(document).ready(
	function myFunction() {
    	myVar = setInterval(changeImage, 6000);
	}
);
function setImage() {
	document.getElementById("wrapper").src = "img/img-"+count+".jpg";
	$("#wrapper").addClass(x);
}