const API_KEY = '45ee35c9';
let URL = "";

let peliculas;
let peliculasFiltradas;

let peliculasTotales=[];

function generateCard(pelicula) {
    //1. Crear la Tarjeta
    const nuevaCard = document.createElement("div");//Crea un elemento de tipo div
    nuevaCard.setAttribute("class","card");

    //2. Crear la Imagen
    const nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", pelicula.Poster);
    nuevaImg.setAttribute("alt", `Póster de la película ${pelicula.Title}`);
    nuevaCard.appendChild(nuevaImg);

    //3. Crear el contenido de la Tarjeta
    const nuevoContenido = document.createElement("div");
    nuevoContenido.setAttribute("class","card-content");
    nuevaCard.appendChild(nuevoContenido);

    //4. Crear el Título
    const nuevoTitulo = document.createElement("h3");
    nuevoTitulo.textContent = pelicula.Title;
    nuevoContenido.appendChild(nuevoTitulo);

    //6. Crear el Año
    const nuevoAnyo = document.createElement("p");
    const nuevoAnyoNegrita = document.createElement("strong");
    nuevoAnyo.appendChild(nuevoAnyoNegrita);
    nuevoAnyoNegrita.textContent = "Año : ";
    nuevoContenido.appendChild(nuevoAnyo);
    const textoAnyo = document.createTextNode(pelicula.Year);
    nuevoAnyo.appendChild(textoAnyo);

    //7. Crear el Género
    const nuevoGenero = document.createElement("p");
    const nuevoGeneroSpan = document.createElement("span");
    nuevoGeneroSpan.setAttribute("class", "genre");
    nuevoGenero.appendChild(nuevoGeneroSpan);
    nuevoGeneroSpan.textContent = "Tipo : ";
    nuevoContenido.appendChild(nuevoGenero);
    const textoGenero = document.createTextNode(pelicula.Type);
    nuevoGenero.appendChild(textoGenero);

    //Agregamos el div al contenedor
    document.querySelector("#container").appendChild(nuevaCard);

    //9. Poner el número de películas
    document.querySelector("#numero-peliculas").innerHTML = "Hay " + peliculasFiltradas.length + " peliculas";
}

function processMovie(data) {
    peliculas = data.Search;
    peliculasFiltradas = data.Search;

    crearConjuntoGeneros(peliculas);

    peliculas.map(pelicula => generateCard(pelicula));
}

function processMovie2(data) {
    peliculasTotales = peliculasTotales.concat(data.Search);
    //peliculasFiltradas = [].concat(data.Search);

    //crearConjuntoGeneros(peliculas);

    //peliculas.map(pelicula => generateCard(pelicula));
    console.log("Movies2 -> " + peliculasTotales);
}

function clearCards(){
    document.querySelectorAll(".card").forEach(card=>card.remove());
}

function crearConjuntoGeneros(peliculas) {
    const setGeneros = new Set();

    peliculas.forEach(pelicula => {
        setGeneros.add(pelicula.Type);
    });

    const listaSelect = document.querySelector("#s-genero");
    listaSelect.innerHTML = "";
    for (let genero of setGeneros) {
        listaSelect.innerHTML += `<option value="${genero}">${genero}</option>`
    }
}
