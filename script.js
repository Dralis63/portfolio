$(document).ready(function(){
    $('.menu-toggle').click(function() {
        $('nav ul').toggleClass('show');
    });
    // Fonction pour ajuster la hauteur de l'intro
    function adjustIntroHeight() {
        var headerHeight = document.getElementById('header').offsetHeight;
        var introElement = document.querySelector('.intro');
        introElement.style.minHeight = `calc(100vh - ${headerHeight}px)`;
    }

    // Appel initial pour ajuster la hauteur
    adjustIntroHeight();

    // Ré-ajuster lors du redimensionnement de la fenêtre
    $(window).on('resize', adjustIntroHeight);
});