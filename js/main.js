$(document).ready(initialiser);
$(window).resize(redimensionner);


var menu = false;
var CV = false;
var hauteur1 = 0;

function initialiser(){
	$("body").append('<div id="cache1"></div>');
	$("body").append('<div id="cache2"></div>');
	$("body").append('<div id="cache3"><span>0%</span></div>');
	
	$("header button").click(ascenceur);
	$("nav a").click(chargement);
	$("nav a").mouseover(survolMenu);
	$("nav a").mouseout(desurvolMenu);
	$("#CV a").mouseover(survolCV);
	$("#CV a").mouseout(desurvolCV);
	$("nav").css({
		position:"absolute",
		top:"-100%"
	});
	hauteur1 = $(".homeDiv:eq(1)").height();
	$(".homeDiv:eq(0)").height(hauteur1);
	
	afficher();
}

function cacher(){
	$("#cache1").animate({"height":"50%"}, 600, "easeOutQuad");
	$("#cache2").animate({
		"top":"50%",
		"height":"50%"
	}, 600, "easeOutQuad", function(){
		window.location.href = "./html/galerie.html";
	});
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

function ascenceur(e){
	if(!menu){
		$("nav").stop(true, true).animate({"top":"0px"}, 500, function() {
			$("section").hide();
		});
		menu = true;
	}else{
		$("section").show();
		$("nav").stop(true, true).animate({"top":"-100%"}, 500);
		menu = false;
	}
}

function chargement(e){
	var target = $(this).text();
	var current = $("section > h1").text();
	if(target == current){
		$("section").show();
		$("nav").stop(true, true).animate({"top":"-100%"}, 500);
		menu = false;
	}else{
		console.log(target, current);
		cacher();
	}
}

function survolCV(e){
	$(this).stop(true, true).animate({backgroundColor:"rgba(250, 250, 250, 0.2)"}, 100);
}
function desurvolCV(e){
	$(this).stop(true, true).animate({backgroundColor:"rgba(250, 250, 250, 0)"}, 300);
}

function survolMenu(e){
	$(this).parent().stop(true, true).animate({backgroundColor:"rgba(250, 250, 250, 0.2)"}, 100);
}
function desurvolMenu(e){
	$(this).parent().stop(true, true).animate({backgroundColor:"rgba(250, 250, 250, 0)"}, 300);
}