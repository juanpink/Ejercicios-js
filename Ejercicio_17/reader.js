import fs from 'node:fs';//Require package.json
/*
1. Leer un fichero
2. Reemplazamos una palabra por otra
3. Mostrar el resultado
*/

function leerFichero(nombreFichero) {
    const data = fs.readFileSync(nombreFichero, 'utf8');
    return data;
}

function censurar(texto, palabraProhibida, palabraSustitucion) {
    const regexp = new RegExp(`\\b${palabraProhibida}\\b`, 'gi');
    const textoCensurado = texto.replaceAll(regexp, palabraSustitucion);
    return textoCensurado;
}

try {
    //const data = fs.readFileSync('./post.txt', 'utf8');
    //const data_censurada = data.replaceAll('gilipollas', '**********');
    const data = leerFichero('./post.txt');

    //const data_censurada = data.replaceAll(/\bgilipollas\b/gi, '**********');
    const data_censurada = censurar(data, 'gilipollas', '**********');

    console.log(data_censurada);

} catch (err) {
    console.error(err);
}
