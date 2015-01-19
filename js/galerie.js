$(document).ready(initialiser);
$(window).resize(redimensionner);



function initialiser(){
	$("body").append('<div id="cache1"></div>');
	$("body").append('<div id="cache2"></div>');
	$("body").append('<div id="cache3"><span>0%</span></div>');
	
	$(".mini").height(	$(".mini").width() / 1.4);
	afficher();
}

function afficher(){
	$("#cache1").animate({"height":"0%"}, 700, "easeOutQuad");
	$("#cache2").animate({
		"top":"100%",
		"height":"0%"
	}, 700, "easeOutQuad");
}

function redimensionner(e){
	$(".mini").height(	$(".mini").width() / 1.4);
}