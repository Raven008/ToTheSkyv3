$(document).ready(initialiser);
$(window).resize(redimensionner);

var CV = false;
var hauteur1 = 0;

function initialiser(){
	$("body").append('<div id="cache1"></div>');
	$("body").append('<div id="cache2"></div>');
	$("body").append('<div id="cache3"><span>0%</span></div>');
	
	$("#CV a").mouseover(survolCV);
	$("#CV a").mouseout(desurvolCV);

	hauteur1 = $(".homeDiv:eq(1)").height();
	$(".homeDiv:eq(0)").height(hauteur1);
	afficher();
}


function afficher(){
	$("#cache3").animate({"width":"100%"}, 2000, function() {
		$("#cache3").fadeOut(200);
		$("#cache1").animate({"height":"0%"}, 700, "easeOutQuad");
		$("#cache2").animate({
			"top":"100%",
			"height":"0%"
		}, 700, "easeOutQuad");
	});
}

function redimensionner(e){
	hauteur1 = $(".homeDiv:eq(1)").height();
	$(".homeDiv:eq(0)").height(hauteur1);
}

function survolCV(e){
	$(this).stop(true, true).animate({backgroundColor:"rgba(250, 250, 250, 0.2)"}, 100);
}
function desurvolCV(e){
	$(this).stop(true, true).animate({backgroundColor:"rgba(250, 250, 250, 0)"}, 300);
}