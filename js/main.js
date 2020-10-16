//CLASES DE LOS JUGADORES Y METODOS

class Player {
    constructor(nombre, ataque, suerte){
        this.nombre = nombre;
        this.ataque = ataque;
        this.suerte = suerte;
        this.vida = 200; 
    }

    atacar(enemigo) {

        let luck = funciones.random (1, enemigo.suerte);

        let atack = (this.ataque - enemigo.defensa)*luck;

        enemigo.vida -= atack;
    }
    
    especial() {
        let atack = (this.ataque + 2);

        enemigo.vida -= atack;
    }
}

//INSTANCIAR PLAYER 1 Y 2

let player1 = new Player("Gerald de Rivia", 50, 40);
let player2 = new Player("Yennefer", 30, 50);