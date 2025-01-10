const URL = 'https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/gamecovers.json';

function processData(data){
    //console.log(data);

    /*
    data.forEach(element => {
        console.log(element.name);
    });
    */

    /*
    const consolasVerticales = data.filter(consola => {
        return consola.orientation === 'portrait';
    });

    consolasVerticales.forEach(consola => {
        console.log(consola.name);
    });
    */

    /*
    const consolasPlay = data.filter(consola => {
        //return consola.name.includes('PlayStation');
        return (consola.name.toLowerCase().includes('playstation') || consola.name.toLowerCase().includes('ps3'));
    });

    consolasPlay.forEach(consola => {
        console.log(consola.name);
    });
    */

    const consolas = data.map(consola => {
        const sql = `insert into T_CONSOLAS set (name, value, orientation) values ('${consola.name}, '${consola.value}', '${consola.orientation}')`;
        return sql;
    });
    consolas.forEach(consola => {
        console.log(consola);
    });

}

function doRequest(url) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            processData(data);
        })
        .catch((error) => console.error("Fetch error:", error));
}

doRequest(URL);