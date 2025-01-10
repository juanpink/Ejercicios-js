const peli1 = {
    titulo : "101 dalmatas",
    año : 1975,
    duracion : 120
};

const peli2 = {
    titulo : "tiburón",
    año : 2022,
    duracion : 135
};

const peli3 = {
    titulo : "dune",
    año : 2022,
    duracion : 90
};

const peli4 = {
    titulo : "django",
    año : 2024,
    duracion : 137
};

let peliculas = [peli1, peli2, peli3, peli4];

/* Ordenar por titulo */
console.warn("Peliculas ordenadas por titulo ascendente");
peliculas.sort((p1, p2) => {
    if (p1.titulo < p2.titulo) return -1;
    if (p1.titulo > p2.titulo) return 1;
    return 0;
}).forEach(peli => console.log(peli));

/* Ordenar por año */
console.warn("Peliculas ordenadas por año descendente");
//peliculas.sort((p1, p2) => p1.año - p2.año).reverse().forEach(peli => console.log(peli));
peliculas.sort((p1, p2) => p2.año - p1.año).forEach(peli => console.log(peli));

/* Ordenar por año y duración */
console.warn("Peliculas ordenadas por año ascendente y duracion ascendente");
peliculas.sort((p1, p2) => {
    if (p1.año == p2.año) {
        return p1.duracion - p2.duracion;
    }
    return p1.año - p2.año;
}).forEach(peli => console.log(peli));