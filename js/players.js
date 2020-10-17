//CLASES DE LOS JUGADORES Y METODOS

class Player {
    constructor(nombre, ataque, suerte) {
        this.nombre = nombre;
        this.ataque = ataque;
        this.suerte = suerte;
        this.vida = 200;
    }
}
    // atacar(enemigo) {
    //     let luck = random(min, max) {
    //         //random creation of a number..
    //         return Math.floor(Math.random() * (max - min) + min));
    //     }
        /*En este caso tenemos la referencia de una lógica muy básica para programar el ataque.
        Declaramos una variable luck que será igual al resultado que nos devuelve una función random 
        que tenemos en el archivo utiles.js, los parámetros que devuelve esta función tienen un mínimo de 1
        y un máximo de la suerte del enmigo
        */

        // luck = funciones.random(1, enemigo.suerte);
        /*A continuación, depositamos en la variable hit, el resultado de primero restarle la defensa 
        del enemigo al luchador que emite el golpe, y posteriormente multiplicarlo por la variable luck
        obtenida antes.*/

        // atack = (this.ataque - enemigo.defensa) * luck;
        /*finalmente , restamos a la vida del enemigo el valor establecido en el golpe (hit)*/

    //     enemigo.vida -= atack;
    // }

//     especial() {
//         let atack = (this.ataque + 2);

//         enemigo.vida -= atack;
//     }
// }

//INSTANCIO PLAYER 1, 2, 3 Y 4

let player1 = new Player("Yennefer", 30, 50);
let player2 = new Player("Ciriana", 60, 20);
let player3 = new Player("Gerald de Rivia", 50, 40);
let player4 = new Player("Maribol", 25, 10);


//Creo un objeto con todos los players

let allplayers = {
    "1": player1,
    "2": player2,
    "3": player3,
    "4": player4
}

//juego

let juego = {

    turno: 0,
    player1: "",
    player2: "",
    ganador: "",

    resetearLucha() {

    },

    turnoLucha() {

    },
}

