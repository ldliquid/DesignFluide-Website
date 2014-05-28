//  Affichage le contenu fluide (droite) au clic sur un header

$('#fluide .bubble header').click(function () {
  var $this = $(this);
  var box = $this.parent('.bubble');
  if (box.hasClass('opened')) {
    box.removeClass('opened');
  } else {
    box.addClass('opened');
  }
})


//  Liste des chapitre pour l’index

$(document).ready(function () {
  $("#solide h1").each(function (i) {
    var current = $(this),
        currentID = current.parent('.chapitre').attr("id");
    current.attr("id", "title" + i);
    $("nav ul").append("<li" + " class='" + current.prop("tagName") + "'>" + "<a href='#" + currentID + "'>" + current.html() + "</a>" + "</li>");
  });
});

//  Liste des parties dans chaque chapitres (plans)

$(document).ready(function () {
  $(".chapitre").each(function (i) {
    var chap = $(this),
        chapTitles = chap.children("h1, h2, h3, h4");
    
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

  var chapButton =  $(".chapitre").children(".parts").children(".H1");

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


var fallingDuration = 18000;

function doBubble(bubble, posX, posY, bgCol, angle, opacity){
  bubble.css({"top":posY+"px",
              "left":posX+"px",
              "backgroundColor":bgCol,
              "transform":"rotate("+angle+"deg)"
             });
  var anim = function anim(){
    bubble.addClass('shown');
    bubble.animate({'opacity':opacity}, 1000, 'easeOutQuad')
          .animate({'margin-top':'200px'}, fallingDuration, 'easeOutQuad')
          .animate({'opacity':'0'}, 840, 'easeOutQuad', function() {
            bubble.removeClass('shown').css('margin-top','0px');
          })
  };
  setTimeout(anim, 0);
}

//  Création des bulles
// Respectivement : (bulle, position x, position y, couleur du fond, angle de la bulle, opacité)
function b1(){ doBubble($("#b1"), 30, 100, '#777', 0, .9)};
function b2(){ doBubble($("#b2"), 130, 10, 'navy', 0, .9)};
function b3(){ doBubble($("#b3"), 300, 20, 'navy', 0, .9)};
function b4(){ doBubble($("#b4"), 250, 300, 'navy', 0, .9)};
function b5(){ doBubble($("#b5"), 40, 300, 'navy', 0, .9)};


var arr = [b1, b2, b3, b4];


function callRandom(arr){
  var rand = Math.floor(Math.random() * arr.length) ;
  arr[rand]();
}
callRandom(b5())
setInterval(function() { callRandom(arr) }, fallingDuration);
