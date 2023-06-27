import dataCategorias from './datos/categorias';
const { categorias } = dataCategorias;
const contenedorCategorias = document.getElementById('categorias');

categorias.forEach((categ) => {
    const nuevaCategoria = document.createElement('a');
    const plantilla = `
        <img class="categoria__img" src="${categ.imagenPortada}" alt="" />
        <div class="categoria__datos">
        <p class="categoria__nombre">${categ.nombre}</p>
        <p class="categoria__numero-fotos">${categ.numeroFotos} fotos</p>
        </div>
    `;

    nuevaCategoria.innerHTML = plantilla;
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href = '#';
    nuevaCategoria.dataset.categoria = categ.id;


    contenedorCategorias.append(nuevaCategoria);
})