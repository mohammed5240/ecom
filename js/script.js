    // const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

    // // Ajouter un écouteur d'événement sur chaque lien
    // sidebarLinks.forEach(link => {
    //     link.addEventListener('click', (event) => {
    //         // Supprimez la classe active de tous les liens
    //         sidebarLinks.forEach(link => link.classList.remove('active'));
            
    //         // Ajoutez la classe active au lien cliqué
    //         event.target.classList.add('active');
    //     });
    // });
    

    


const productContainers = [...document.querySelectorAll('.xx .ul')];
const btn1 = [...document.querySelectorAll('.xx .btn1')];
const btn2 = [...document.querySelectorAll('.xx .btn2')];

productContainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    console.log(containerDimensions);
    let containerWidth = containerDimensions.width;
    console.log(containerWidth);
    btn1[i].addEventListener('click',() => {
        item.scrollLeft -= containerWidth/4;
        console.log(btn1[i])
    })
    btn2[i].addEventListener('click',() => {
        item.scrollLeft += containerWidth/4;
    })
        
    })
