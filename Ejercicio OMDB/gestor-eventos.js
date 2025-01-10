//Buscar por título
filtrarPeliculas("#b-titulo", "click", "#t-titulo", "Title");

//Buscar por género directamente al seleccionar de la lista
filtrarPeliculas("#s-genero", "change", "#s-genero", "Type");

//Buscar por año
filtrarPeliculas("#b-anyo", "click", "#t-anyo", "Year");

function filtrarPeliculas(idElementoListener, evento, idElementoBusqueda, nombreAtributoBusqueda) {
    document.querySelector(idElementoListener).addEventListener(evento, () => {   
        clearCards();
        const textoBusqueda = document.querySelector(idElementoBusqueda).value;
        peliculasFiltradas =
            peliculas.filter(pelicula =>
                pelicula[nombreAtributoBusqueda]
                    .toUpperCase()
                    .includes(textoBusqueda.trim().toUpperCase()));
        peliculasFiltradas.map(generateCard);
    });
}

//Ordenar películas
document.querySelector("#b-ordenar").addEventListener("click", () => {
    clearCards();

    const orden = document.querySelector('input[name="ordenar"]:checked').value;

    const pelis = [].concat(peliculasFiltradas);
    //const pelis = Array.from(peliculasFiltradas);

    const peliculasOrdenadas = pelis.sort((p1, p2) => {
        const pAnyo1 = parseInt(p1.Year);
        const pAnyo2 = parseInt(p2.Year);

        if (orden === "ascendente") {
            return pAnyo1 - pAnyo2;
        }
        return pAnyo2 - pAnyo1;
    });
    peliculasOrdenadas.map(pelicula => generateCard(pelicula));
});

function processTotalRegistros(data) {
    //Hacer for con page=i llamando a la URL a otra doGetRequest para ir añadiendo los resultados en un array.

    //console.log(data.totalResults);
    //console.log("Total páginas -> ", (Math.trunc(data.totalResults / 10)) + 1);
    const totalPaginas = (Math.trunc(data.totalResults / 10)) + 1;
    for(let i=0; i<2; i++) {
        paginaURL = `${URL}&page=${i}`
        doGetRequest(paginaURL, processMovie2);
    }

    console.log(peliculasTotales);
    //crearConjuntoGeneros(peliculas);
    //peliculas.map(pelicula => generateCard(pelicula));
}

//Buscar en OMDB
document.querySelector("#b-omdb").addEventListener("click", () => {
    const tituloBuscado = document.querySelector("#t-omdb").value.trim();
    const apiKey = document.querySelector("#t-api").value.trim();

    if (tituloBuscado.length > 0 && apiKey.length > 0) {
        URL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${tituloBuscado}`;

        //Mirar totalResults y llamamos a una función para saber el número de paginas que hay
        doGetRequest(URL, processTotalRegistros);

        //doGetRequest(URL, processMovie);

        document.querySelector("#div-formulario").style.visibility = "visible";
    }
});

