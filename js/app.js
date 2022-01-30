//variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year')

const max = new Date().getFullYear();
const min = max - 10;


//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //muestra los autos al cargar

    //llena las opciones de años
    llenarSelect();
})


//funciones
function mostrarAutos() {
    autos.forEach( auto => {
        const autoHTML = document.createElement('p');
        const {marca, modelo, year, precio, puertas, transmision, color} = auto;

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        //insertar en el HTML
        resultado.appendChild(autoHTML)
    });
}

function llenarSelect() {
    
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion) //agrega las opciones al año seleccionado
    }
}
