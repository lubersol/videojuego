//CLASES DE LOS JUGADORES Y METODOS

class Player {
    constructor(nombre, ataque, defensa, resistencia, suerte){
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.resistencia = resistencia;
        this.suerte = suerte;
        this.vida = 200; 
    }

    atacar(enemigo) {

        let luck = funciones.random (1, enemigo.suerte);

        let atack = (this.ataque - enemigo.defensa)*luck;

        enemigo.vida -= atack;
    }
    defender() {

    }
    especial() {
        let atack = (this.ataque + 2);

        enemigo.vida -= atack;
    }
}

//INSTANCIAR PLAYER 1 Y 2

let player1 = new Player("Gerald de Rivia", 50, 40, 10, 5);
let player2 = new Player("Yennefer", 30, 50, 40, 7);