$(document).ready(initialiser);


var menu = false;


function initialiser(){
	$("header button").click(ascenceur);
	$("nav a").click(chargement);
	//$("nav a").mouseover(survolMenu);
	//$("nav a").mouseout(desurvolMenu);
	
	$("nav").css({
		position:"absolute",
		top:"-100%"
	});
	
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

function cacher(){
	$("#cache1").animate({"height":"50%"}, 600, "easeOutQuad");
	$("#cache2").animate({
		"top":"50%",
		"height":"50%"
	}, 600, "easeOutQuad", function(){
		window.location.href = "./html/galerie.html";
	});
}

/*
function survolMenu(e){
	$(this).parent().stop(true, true).animate({backgroundColor:"rgba(250, 250, 250, 0.2)"}, 100);
}
function desurvolMenu(e){
	$(this).parent().stop(true, true).animate({backgroundColor:"rgba(250, 250, 250, 0)"}, 300);
}*/