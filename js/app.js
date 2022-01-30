//variables
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision= document.querySelector('#transmision')
const color = document.querySelector('#color')

//generar select para  el año de busqueda
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

//generate un objeto con la búsqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}


//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //muestra los autos al cargar

    //llena las opciones de años
    llenarSelect();
})

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
})


//funciones
function mostrarAutos(autos) {

    limpiarHTML(); //elimina el html previo

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

//limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect() {
    
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion) //agrega las opciones al año seleccionado
    }
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)

    mostrarAutos(resultado)
    //console.log(resultado)
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda
    if (year) {
        return auto.year === year;
    }
    return auto;
}