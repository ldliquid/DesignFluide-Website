//  Affichage le contenu fluide (droite) au clic sur un header

$('#fluide .bubble .discussion').click(function () {
  var $this = $(this);
  var box = $this.parent('.bubble');
  if (box.hasClass('opened')) {
    box.removeClass('opened');
  } else {
    box.addClass('opened');
  }
})
$('#fluide .bubble .comment button').click(function () {
  $(this).parent(".comment").parent(".bubble").children(".discussion").click();
})


//  Liste des chapitre pour l’index

$(document).ready(function () {
  $("#solide h1").not('.donolist').each(function (i) {
    var current = $(this),
        currentID = current.parent('.chap-inner').parent('.chapitre').attr("id");
    current.attr("id", "title" + i);
    $("nav ul").append("<li" + " class='" + current.prop("tagName") + "'>" + "<a href='#" + currentID + "'>" + current.html() + "</a>" + "</li>");
  });
});

//  Liste des parties dans chaque chapitres (plans)

$(document).ready(function () {
  $(".chapitre").each(function (i) {
    var chap = $(this),
        chapTitles = chap.children('.chap-inner').children("h1, h2, h3, h4");
    
    chap.prepend("<ul class='parts'></ul>");
    var chapul = chap.children(".parts");
  
// Intégration des titres dans la liste .parts précedement créée    
   $(chapTitles.get().reverse()).each(function (i) {
      var current = $(this);
      current.attr("id", "part" + i);
      chapul.prepend("<li" + " class='" + current.prop("tagName") + "'>" + current.html() + "</li>");
    });
  });


  // Affichager - masquer les plans

  var chapButton =  $(".chapitre").not('.donolink').children(".parts").children(".H1");
  chapButton.click(function(){
    var parentChap = $(this).parent(".parts").parent(".chapitre");
    if (parentChap.hasClass("opened")){
      parentChap.removeClass("opened"); 
    } else {
      parentChap.addClass("opened");
    }
    
  })

});


//  Fonction création d’une bulle


var fallingDuration = 300000;

var zindex = 10;

function doBubble(bubble, posX, posY, angle, opacity){
  bubble.css({"top":posY+"px",
              "left":posX+"px",
              "transform":"rotate("+angle+"deg)"
             });
  var anim = function anim(){
    bubble.addClass('shown');
    bubble.css("z-index", zindex++);
    bubble.animate({'opacity':opacity}, 1000, 'easeOutQuad')
          .animate({'margin-top':'400px'}, fallingDuration, 'easeOutQuad')
          .animate({'opacity':'0'}, 840, 'easeOutQuad', function() {
            bubble.removeClass('shown').css('margin-top','0px');
          })
  };
  setTimeout(anim, 0);
}

//  Création des bulles
// Respectivement : (bulle, position x, position y, couleur du fond, angle de la bulle, opacité)

function b1(){ doBubble($("#b1"), 30, 90, 0, .9)};
function b2(){ doBubble($("#b2"), 130, 50, 0, .9)};
function b3(){ doBubble($("#b3"), 15, 20, 0, .9)};
function b4(){ doBubble($("#b4"), 100, 12, 0, .9)};
function b5(){ doBubble($("#b5"), 40, 9, 0, .9)};
function b6(){ doBubble($("#b6"), 230, 50, 0, .9)};
function b7(){ doBubble($("#b7"), 230, 10, 0, .9)};
function b8(){ doBubble($("#b8"), 320, 20, 0, .9)};
function b9(){ doBubble($("#b9"), 10, 66, 0, .9)};
function b10(){ doBubble($("#b10"), 450, 74, 0, .9)};
function b11(){ doBubble($("#b11"), 30, 100, 0, .9)};
function b12(){ doBubble($("#b12"), 130, 10, 0, .9)};
function b13(){ doBubble($("#b13"), 59, 20, 0, .9)};
function b14(){ doBubble($("#b14"), 55, 25, 0, .9)};
function b15(){ doBubble($("#b15"), 40, 8, 0, .9)};
function b16(){ doBubble($("#b16"), 80, 30, 0, .9)};
function b17(){ doBubble($("#b17"), 30, 10, 0, .9)};
function b18(){ doBubble($("#b18"), 73, 20, 0, .9)};
function b19(){ doBubble($("#b19"), 50, 5, 0, .9)};

var arr = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19];

function callRandom(arr){
  var rand = Math.floor(Math.random() * arr.length) ;
  arr[rand]();
}
callRandom(arr)
setInterval(function() { callRandom(arr) }, 100000);



$(".bubble").click(function(){
  var currentZ = $(this).css("z-index");
  var top
  console.log(currentZ)
  $(this).css("z-index",parseInt(currentZ)+5);
})


/*
* ----------------------------------------------------------------------
* PAGE ABOUT
* ----------------------------------------------------------------------
*/	


  /* Ouverture */ 


$('.partager').click(
  function(){
    $('.sharepopup').fadeIn();
    return false;
  }
);

  /* Fermeture */ 



	$('.sharepopup button').click(
	function(){
		$(this).parent('.sharepopup').fadeOut();
		return false;
	}
);

