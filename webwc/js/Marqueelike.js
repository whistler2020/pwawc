/* Nom du fichier: "Anime1.js"*/
/* Scource : https://codepen.io/jreaux62/pen/PWqabY */
/* Derniere modification : 24 juillet 2021 */


function Marqueelike() {
    $('.messagedefilant').each(function() {
      var texte = $(this).html();
      $(this).html('<div><span>' + texte + '</span><span>' + texte + '</span></div>');
    });
  }
   
  $(window).on('load', function() {
    marqueelike();
  });