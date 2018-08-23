var rola ={};
var imag=[];
var clicked = false;
var audios = ["crujidos1","crujidos2"];

  // Pace.on("done",function(){
  //     $(".loader").slideUp("slow");
  //     $(".pace").addClass("encoger");
  // });

  $(window).load(function(){
    $(".loader").slideUp("slow");
    $(".pace").addClass("encoger");
    console.log("loaded!")
  });

var cargado = false;

$(".SetCatalogo img").on("click",function(){
	$("section.catalogo-view").show();
	$("span.cerrar-view").show();
	$("body").css("overflow","hidden");
	if (cargado===false) {
		$("section.catalogo-view").load("catalogo/sub_catalogo.html");
		cargado = true;
	}
});

$("span.cerrar-view").on("click",function(){
	window.location.replace("catalogo.html");
});

$(document).ready(function(){
	// var section = $("section");
	// for (var i = 0; i < section.length; i++) {
	// 	$(section[i]).css("background-color","rgba(110,"+i+"10,"+i+"10,1)");
	// }
	// hacerThumbs();
 	$('.bxslider').bxSlider();

 	var figs=$(".fig");

 	for (var i = 0; i < figs.length; i++) {
 		imagen=$(figs[i]).attr("img");

 		imag[i]=imagen.replace("mermelada","").replace(".jpg","");

 		$(figs[i]).css("background-image","url(assets/images/photos/"+imagen+")");
 	}

});
/*Controles visualizador de imágenes*/
$(".fig").on("click",function(){
	pos=$(this).attr("img");
	var num= pos.replace("mermelada","").replace(".jpg","");
	$(".fxd_fondo").fadeIn("fast");
	$(".fxd_imagen").css("background","url(assets/images/photos/mermelada"+num+".jpg)");
	$(".fxd_imagen").attr("pos",num);

	if (num===imag[0]) {
		$(".ant").hide();
	}else if(num===imag[imag.length-1]){
		$(".sig").hide();
	}else{
		$(".sig").show();
		$(".ant").show();
	}


	function IMGanterior(){
		pos = $(".fxd_imagen").attr("pos");
		lugar=imag.indexOf(pos);
		if (pos !== imag[0]) {
			$(".fxd_imagen").css("background","url(assets/images/photos/mermelada"+imag[lugar-1]+".jpg)");
			$(".fxd_imagen").attr("pos",imag[lugar-1]);
			$(".sig").show();
			$(".ant").show();
		}else{
			$(".ant").hide();
		}
		// console.log("lugar:"+lugar);
	}

	function IMGsiguiente(){
		pos = $(".fxd_imagen").attr("pos");
		lugar=imag.indexOf(pos);

		if (pos !== imag[imag.length-1]) {
			$(".fxd_imagen").css("background","url(assets/images/photos/mermelada"+imag[lugar+1]+".jpg)");
			$(".fxd_imagen").attr("pos",imag[lugar+1]);
			$(".sig").show();
			$(".ant").show();
		}else{
			$(".sig").hide();
		}
		// console.log("lugar:"+lugar);
	}

	$(".sig").on("click",function(){
		IMGsiguiente();
	});

	$(".ant").on("click",function(){
		IMGanterior();
	});

	$(".cerrar").on("click",function(){
		$(".fxd_fondo").fadeOut("fast");
	});

	$(document).keydown(function(e) {
	    switch(e.which) {
	    	//case 32: // space bar
	        case 39: // right
	       // case 40: // down
	        	IMGsiguiente();
	        break;
	        case 37: // left
	       // case 38: // up
	        	IMGanterior();
	        break;
	        case 27: // left
	       // case 38: // up
	        	$(".fxd_fondo").fadeOut("fast");
	        break;
	        default: return; // exit this handler for other keys
	    }
   		e.preventDefault(); // prevent the default action (scroll / move caret)
	});

});

function hacerThumbs(){
	Thumbs=$("div.thumbnails div ul");
	NumPages=190;

	for (var i = 1; i < NumPages; i++) {
		if (i===1 || i===190) {
			Thumbs.append('<li class="i"><img src="pages/'+i+'-thumb.jpg" width="76" height="100" class="page-'+i+'"><span>'+i+'</span></li>');
		}else{
			sig = i+1; //5568823617
			Thumbs.append('<li class="d"><img src="pages/'+i+'-thumb.jpg" width="76" height="100" class="page-'+i+'"><img src="pages/'+sig+'-thumb.jpg" width="76" height="100" class="page-'+sig+'"><span>'+i+'-'+sig+'</span></li>');
		}
	}
}

$("figure").bind("touchstart",function(event){
	event.preventDefault();
});

for (var i = 0; i < audios.length; i++) {
	rola["efecto"+i] = new Audio('assets/videos/'+audios[i]+'.mp3');
}

$("#v_terram").on("click",function(){
	if (clicked === true) {
		$("#v_terram")[0].pause();
		// $("#v_terram")[0].currentTime = 0; //Stop
		clicked = false;
	}else{
		$("#v_terram")[0].play();
		clicked = true;
	}
});
