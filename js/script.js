$(document).ready(function() {
    // Toggle menu visibility on small screens
    $('.menu-toggle').click(function() {
        $('nav ul').toggleClass('show');
    });

    // Function to adjust the height of the intro section
    function adjustIntroHeight() {
        var headerHeight = document.getElementById('header').offsetHeight;
        var introElement = document.querySelector('.intro');
        introElement.style.minHeight = `calc(100vh - ${headerHeight}px)`;
    }

    // Initial call to adjust the height
    adjustIntroHeight();

    // Adjust height on window resize
    $(window).on('resize', adjustIntroHeight);

    // Handling form submission
    async function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        var form = document.getElementById('contact-form');
        var status = document.getElementById('form-status'); // Assurez-vous d'avoir cet élément dans votre HTML
        var formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.innerHTML = "Merci pour votre soumission !";
                form.reset(); // Reset the form after submission
            } else {
                const data = await response.json();
                if (data.errors) {
                    status.innerHTML = data.errors.map(error => error.message).join(", ");
                } else {
                    status.innerHTML = "Oups ! Il y a eu un problème lors de l'envoi de votre formulaire.";
                }
            }
        } catch (error) {
            status.innerHTML = "Oups ! Il y a eu un problème lors de l'envoi de votre formulaire.";
            console.error('Erreur:', error);
        }
    }

    document.getElementById('contact-form')?.addEventListener('submit', handleSubmit);
});
