// Obtén todos los elementos de pestañas y contenido
const tabLinks = document.querySelectorAll('.tab-link');
const tabPanes = document.querySelectorAll('.tab-pane');
//console.log(tabLinks);
//console.log(tabPanes);
tabLinks.forEach(
    function(link,index){
        link.addEventListener('click', function(){
            tabPanes.forEach(function(pane,index){
                pane.style.display='none';
            });
            tabPanes[index].style.display='block';
        })
    }
)

/* 
// Agrega un manejador de eventos a cada pestaña
tabLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Oculta todos los paneles de contenido
        tabPanes.forEach(pane => {
            pane.style.display = 'none';
        });

        // Muestra el panel de contenido correspondiente a la pestaña seleccionada
        tabPanes[index].style.display = 'block';
    });
});
array.forEach(function(element, index, array) {
    // Código a ejecutar en cada elemento
});
 */