const API_KEY = '45ee35c9';
const COMMON_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

//'http://www.omdbapi.com/?apikey=45ee35c9&s=Star Wars'

function processData(pelicula) {
    console.log("Titulo : " + pelicula.Title + " -> Director : " + pelicula.Director);
    console.warn("\nActores");
    pelicula.Actors.split(', ').forEach(actor => console.log(actor));
}

function processData2(peliculas) {
    console.warn("\nPeliculas Estrenadas en el año 2000 y sucesivas");
    //console.log(peliculas.Search[0].Title);
    peliculas.Search.filter(pelicula => pelicula.Year >= '2000').forEach(pelicula => console.log("Titulo : " + pelicula.Title + " -> Año : " + pelicula.Year));
}

function processDataPaginado(peliculas) {
    console.warn("\nPeliculas Estrenadas en el año 2000 y sucesivas De todas las páginas");
    peliculas.Search.filter(pelicula => pelicula.Year >= '2000').forEach(pelicula => console.log("Titulo : " + pelicula.Title + " -> Año : " + pelicula.Year));
}

function doRequest(url, funcionProceso) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            /* Sin parámetro de función */
            //processData(data);
            //processData2(data);
            //processDataPaginado(data);

            /* Con parámetro de función */
            funcionProceso(data);
        })
        .catch((error) => console.error("Fetch error:", error));
}

// Ejerciccio 1
//Mostrar por pantalla el título, director y actores
//doRequest(COMMON_URL + 't=Batman');
//doRequest(COMMON_URL + 't=Batman', processData);

//Ejercicio 2
//Mostrar el título y el año de las peliculas estrenadas en el año 2000 y sucesivos
//doRequest(COMMON_URL + 's=Star Wars');
doRequest(COMMON_URL + 's=Star Wars', processData2);

//Hacer recorrido por todas las páginas
//1. Hacer fetch para saber el número de totalResults y calcular cantidad de páginas totalResults / 10, quedarse con el entero y los decimales.
//2. Hacer ciclo para hacer fetch de cada página y almacenar los resultados en array para luego buscar.
//3. Hacer el filtro sobre el array creado y mostrarlo.