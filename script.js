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
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire
    
    const form = this;
    const formData = new FormData(form);
    
    fetch('https://cors-anywhere.herokuapp.com/https://formspree.io/f/xvgpaqkj', {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => response.json())
    .then(data => {
        alert('Votre message a été envoyé !');
        form.reset();
    })
    .catch(error => {
        alert('Une erreur est survenue. Veuillez réessayer.');
    });
});