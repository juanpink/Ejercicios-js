const playa_1 = {
    nombre : 'Famara',
    pais : 'España',
    dificultad : 'Principiante'
}

const playa_2 = {
    nombre : 'Nazaré',
    pais : 'Portugal',
    dificultad : 'Experto'
}

const playa_3 = {
    nombre : 'Pipeline',
    pais : 'Estados Unidos',
    dificultad : 'Experto'
}

const playa_4 = {
    nombre : 'Somo',
    pais : 'España',
    dificultad : 'Intermedio'
}

let playas = new Array();
playas.push(playa_1);//Agrega al final
playas.push(playa_2);
playas.push(playa_3);
//console.log(playas);//Famara, Nazare, Pipeline
playas.unshift(playa_4);//Agrega al principio
//console.log(playas);//Somo, Famara, Nazare, Pipeline

//1. Filter de las playas de dificultad Experto
/*
const playasExperto = playas.filter(playa => {
    return playa.dificultad === 'Experto';
});

//console.log(playasExperto);
console.warn("Playas de dificultad Experto");
playasExperto.forEach(playa => {
    console.log(playa.nombre);
});
*/

playas.filter(playa => {
    return playa.dificultad === 'Experto';
}).forEach(playa => {
    console.log('Playa Experto : ' + playa.nombre);
});

playas.filter(playa => playa.dificultad === 'Experto').forEach(playa => console.log('Playa EXPERTO : ' + playa.nombre));

playas
    .filter(playa => playa.dificultad === 'Experto')
    .forEach(playa => console.log('Playa EXPERTO : ' + playa.nombre));

//2. Filter de las playas de España
/*
const playasEspaña = playas.filter(playa => {
    return playa.pais === 'España';
});
*/

const playasEspaña = playas
    .filter(playa => {
        return playa.pais === 'España';
    })
    .map(playaEspana => {
        return playaEspana.nombre;
    });

console.error("\nPlayas de España");
playasEspaña.forEach(playa => {
    console.log(playa);
});

//3. Obtención del código HTML que representa una playa
//<div class='playa'><div>Playa:Famara</div><div>País:España</div></div>
const playasHtml = playas.map(playa => {
    return `<div class='playa'><div>Playa:${playa.nombre}</div><div>País:${playa.pais}</div></div>`;
});

console.log("\nPlayas HTML");
playasHtml.forEach(playa => {
    console.log(playa);
});

//Playas div de nivel Experto
console.warn("\n********* Div de Playas de dificultad Experto ***********\n");
playas
    .filter(playa => playa.dificultad === 'Experto')
    .map(playa => `<div class='playa'><div>Playa:${playa.nombre}</div><div>País:${playa.pais}</div></div>`)
    .forEach(lineaHTML => console.log(lineaHTML));
