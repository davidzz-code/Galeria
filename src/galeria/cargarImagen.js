import data from './../datos/fotos';

const galeria = document.getElementById('galeria');

const cargarImagen = (id, nombre, ruta, descripcion) => {
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];

    // Selecciona el index de la imagen que se carga 
    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if (foto.id === id) {
            indexImagenActual = index;
        };
    });
    
    
    if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
        // Eliminamos la calse active de cualquier slide
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        
        // Marcamos la clase active de cualquier slide
        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
    }
};


const cargarAnteriorSiguiente = (direccion) => {
    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];

    // Pasamos el id a un 'number' porque lo estamos igualando en el siguiente condicional
    const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);


    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if (foto.id === idImagenActual) {
            indexImagenActual = index;
        }
    });

    if (direccion === 'siguiente') {
        if (fotos[indexImagenActual + 1]) {
            const {id, nombre, ruta, descripcion} =  fotos[indexImagenActual + 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
        
    } else if (direccion === 'anterior') {
        if (fotos[indexImagenActual - 1]) {
            const {id, nombre, ruta, descripcion} =  fotos[indexImagenActual - 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }
}
export { cargarImagen, cargarAnteriorSiguiente };