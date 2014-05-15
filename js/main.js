

  /* Affichage du contenu au clic sur un header*/ 

  $('.content header').click(function(){
    var $this = $(this);
    var box = $this.parent('.content');
    if (box.hasClass('opened')){
    	box.removeClass('opened');
	}else{
      	box.addClass('opened');
    }
  })


  /* ouverture chapitre */ 

$(document).ready(function() {
    $("#solide h1").each(function(i) {
        var current = $(this);
        current.attr("id", "title" + i);
        $("nav ul").append("<li"+" class='" + current.prop("tagName") + "'>" + current.html() + "</li>");
    });
});


  /* Afficher un chapitre */ 
function displayChap(chap){
	chap.addClass("current");
}

$("nav ul .H1").click(function(e){
	e.preventDefault();
	var title = $(this);
	console.log("caca");
});


// displayChap($("#open-source"));


// Text boxes
$('nav button').click(function(e){
	e.preventDefault();
	var opener = $(this),
	oclass = opener.attr('class');
	pid = $('#' + oclass);
	$('body').toggleClass(oclass);
	pid.toggle();
});














