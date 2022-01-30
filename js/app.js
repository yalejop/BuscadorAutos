//variables
const resultado = document.querySelector('#resultado');


//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
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
