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

//  Liste des parties dans chaque chapitres

$(document).ready(function () {
  $(".chapitre").each(function (i) {
    var chap = $(this),
        chapTitles = chap.children("h1, h2, h3, h4");
    
   $(chapTitles.get().reverse()).each(function (i) {
      var current = $(this);
      current.attr("id", "part" + i);
      chap.prepend("<ul class='parts'><li" + " class='" + current.prop("tagName") + "'>" + current.html() + "</ul></li>");
    });
  });
});

//  Fonction création d’une bulle

var fallingDuration = 100000,
    randGo = Math.random(fallingDuration % 10);

console.log(fallingDuration)

function doBubble(bubble, posX, posY, bgCol, angle, opacity, delay){
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
            bubble.removeClass('shown');
          })
  };
  setTimeout(anim, delay);
}

//  Création des bulle

// Respectivement : (bulle, position x, position y, couleur du fond, angle de la bulle, opacité, délai avant création)

doBubble($("#b1"), 30, 100, '#777', 0, .9, 0);
doBubble($("#b2"), 130, 10, 'navy', 0, .9, 4000);
doBubble($("#b2"), 130, 10, 'navy', 0, .9, 8000);

