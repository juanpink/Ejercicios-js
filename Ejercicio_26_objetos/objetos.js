let from = {
    titulo : 'From',
    numeroTemporadas : 4,
    sinopsis : 'En un aterrador pueblo del centro de Estados Unidos, que atrapa a las personas que entran, los involuntarios residentes luchan por sobrevivir y escapar de él, pero el bosque que lo rodea está plagado de horribles criaturas nocturnas.',
    añoEstreno : 2022,
    plataforma : 'Movistar Plus+',
    reparto : [
        {
            nombre : 'Hannah Cheramy', 
            personaje : 'Julie Matthews'
        },
        {
            nombre : 'Harold Perrineau', 
            personaje : 'Boyd Stevens'
        },
        {
            nombre : 'Avery Konrad', 
            personaje : 'Sara Myers'
        }
    ]
};

console.log(from.titulo);
console.log(from.reparto[0].nombre);

console.log("\nPERSONAJES\n");
from.reparto.forEach((actor) => {
    console.log(actor.personaje);
});



