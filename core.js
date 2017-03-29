var myVar;
var count;
count=1;
function changeImage() {
    count++;
    if (count > 4) {
    	count=1;
    };
    setImage();
}
function setImage() {
    document.getElementById("wrapper").src= "img/img-" + count+ ".jpg";
	$("#wrapper").toggleClass("pulseE pulseO");
}
window.onload = function(){
	$(".container").css("opacity", "1.0");
    $("#wrapper").addClass("animated pulseE");
};
$(document).ready(
    function myFunction() {
        myVar = setInterval(changeImage, 4000);
    }
);