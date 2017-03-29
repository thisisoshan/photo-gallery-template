var myVar;
var count=1;
function changeImage() {
    count++;
    if (count > 4) {
    	count=1;
    };
    $("#wrapper").animate(setImage(count), {
        duration: 3200,
        easing: "ease-in"
    });
}
function setImage(photoID) {
    document.getElementById("wrapper").src= "img/img-" + photoID + ".jpg";
	$("#wrapper").toggleClass("pulseE pulseO");
}
window.onload = function(e){
    e.preventDefault();
	$(".container").css("opacity", "1.0");
    $("#wrapper").addClass("animated pulseE");
};
$(document).ready(
    function myFunction() {
        myVar = setInterval(changeImage, 3400);
    }
);