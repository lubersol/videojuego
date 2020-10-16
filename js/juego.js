//Declaracion de variables del juego

let arrayPersonajes = [];


//Declaro las funciones

const funcionSinArgumentos = () => {

    //A partir de esta linea tenemos el código interno de la función.

    let numero1 = 5;

    let numero2 = 10;

    return numero1 + numero2;
    //fin del código de la función.
}

const funcionConArgumentos = (argumento1, argumento2) => {

    return argumento1 - argumento2;
}

const funcionArgumentosFijos = (argumento3, argumento4 = 400) => {

    return argumento3 - argumento4;
}

const botonClick = (arg1) => {
    console.log("Me has clickado y me has pasado el numero :", arg1, " como argumento.");
}

const elegirPersonaje = (personaje) => {

    if (arrayPersonajes.length < 2) {

        arrayPersonajes.push(personaje);

        if (arrayPersonajes.length == 2) {
            alert("Ya has escogido los 2 personajes", arrayPersonajes);
            return;
        }
        console.log(arrayPersonajes);
        console.log(arrayPersonajes.length);

    }
}

//elenco de funciones útiles que podremos utilizar a nuestro antojo en varios proyectos

const funciones = {
    
    minMax: (n, min, max) => {
        //min and max limiter..
        return Math.max (Math.min (n, max), min);
    },
    random(min, max){
        //random creation of a number..
        return Math.floor(Math.random() * (max - min) + min);
    }
    
}
