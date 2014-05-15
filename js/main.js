/*   Affichage le contenu fluide (droite) au clic sur un header */

$('#fluide .content header').click(function () {
  var $this = $(this);
  var box = $this.parent('.content');
  if (box.hasClass('opened')) {
    box.removeClass('opened');
  } else {
    box.addClass('opened');
  }
})


/*   Liste des chapitre */

$(document).ready(function () {
  $("#solide h1").each(function (i) {
    var current = $(this),
        currentID = current.parent('.chapitre').attr("id");
    current.attr("id", "title" + i);
    $("nav ul").append("<li" + " class='" + current.prop("tagName") + "'>" + "<a href='#" + currentID + "'>" + current.html() + "</a>" + "</li>");
  });
});