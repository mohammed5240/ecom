    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

    // Ajouter un écouteur d'événement sur chaque lien
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Supprimez la classe active de tous les liens
            sidebarLinks.forEach(link => link.classList.remove('active'));
            
            // Ajoutez la classe active au lien cliqué
            event.target.classList.add('active');
        });
    });
    

    


