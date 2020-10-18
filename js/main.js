/*Función que se ejecuta cuando pulsamos el botón de html con onclick cambiaPantalla y le pasamos un parámetro para que haga el switch */

const cambiaPantalla = (num) => {

//Recibe el parámetro que le pasamos al pulsar los botones
    switch (num) {

        case 2:
            document.getElementById('fase1').style.display = "none";
            document.getElementById('fase2').style.display = "flex";
            break;

        case 3:
            document.getElementById('fase2').style.display = "none";
            document.getElementById('fase3').style.display = "flex";
            break;

        case 1:
            location.reload()
            break;

        default:
    }
}

//Constructor clase del personaje
class Personaje {
    constructor(name, power, armor, hurt, image) {
        this.name = name;
        this.power = power;
        this.armor = armor;
        this.hurt = hurt;
        this.image = image;
    }
// Funcion Recibir Daño
    getHurt = (hurt) => {
        const tirada = tirarDado();
        if (tirada === 20) {
            console.log("\tCRITICAL HIT! " + hurt * 2);
            this.power -= hurt * 2 - this.armor;
        } else if (tirada === 1) {
            console.log("\tHAS FALLADO!");
        } else {
            console.log("\tGOLPE NORMAL " + (hurt - this.armor));
            this.power -= hurt - this.armor;
        }
    };
}

//Nuestro tirador de dados aleatorio
const min = 1;
const max = 20;
const tirarDado = () => Math.floor(Math.random() * (max - min + min)) + 1;

//Guardo en constantes el div "brujos" y "selected"
const brujosElement = document.getElementById("brujos");
const selectedElement = document.getElementById("selected");

selectedElement.innerHTML = "";

//Instancio los objetos de los personajes con sus imágenes
const pers1 = new Personaje("Yennefer", 100, 10, 15, 'img/personajeYennefer.jpg');
const pers2 = new Personaje("Ciri", 100, 5, 15, 'img/personajeCiri.jpg');
const pers3 = new Personaje("Gerald", 100, 8, 35, 'img/personajeGerald.jpg');
const pers4 = new Personaje("Maribol", 100, 5, 20, 'img/personajeMaribol.jpg');

//Creo array con los objetos
let arrayPJ = [pers1, pers2, pers3, pers4];

//Creo array vacío y constante con valor numérico 2
let arraySeleccionados = [];
const maximaSeleccionDePJ = 2;

//Declaro las variables con los personajes seleccionados
let pjSelec1;
let pjSelec2;

//Declaro variable vacía donde meteré la ficha de personajes
let infoBrujos = "";
/*Uso método "for in" para recorrer arrayPJ y que me devuelva sus objetos metiendolos en variable infoBrujos*/
//Declaro la función de flecha
const pintarBrujos = () => {
    for (let x in arrayPJ) {
        infoBrujos += `<div class="pj" id="pj${x}" onclick="selectPJ(${parseInt(
            x
        )})" > <div class="text">Name: ${arrayPJ[x].name
            } <img class="persona" src="${arrayPJ[x].image}" />
           </div> <div class="text">Power: ${arrayPJ[x].power
            }</div> <div class="text">Armor: ${arrayPJ[x].armor
            }</div> <div class="text">Hurt: ${arrayPJ[x].armor}</div> </div>`;
    }
    brujosElement.innerHTML = infoBrujos;
};
//Llamo al método
pintarBrujos();
//Declaro función selección de personajes para que solo sean 2. Inhabilito los controles del div del personaje
const selectPJ = (x) => {
    if (arraySeleccionados.length < maximaSeleccionDePJ) {
        arraySeleccionados.push(arrayPJ[parseInt(x)]);
        document.getElementById("pj" + x).style.pointerEvents = "none";
        document.getElementById("pj" + x).style.backgroundColor = "black";

        pintarSeleccionados();

        asignarParaPelear();
    }
};
//Declaro función para que saque por pantalla los personajes seleccionados
const pintarSeleccionados = () => {
    let infoSelected = "";
    for (let character of arraySeleccionados) {
        infoSelected += `<div class="pj"> 
                              <div class="text">Name: ${character.name} <img class="persona" src="${character.image}" /> 
                              </div> <div class="text">Power: ${character.power}</div> 
                              <div class="text">Armor: ${character.armor}</div> 
                              <div class="text">Hurt: ${character.hurt}</div> 
                            </div>`;
    }
    selectedElement.innerHTML = infoSelected;
};
//Función flecha donde guardo en variables los personajes seleccionados
const asignarParaPelear = () => {
    if (arraySeleccionados[0]) {
        pjSelec1 = arraySeleccionados[0];
    }

    if (arraySeleccionados[1]) {
        pjSelec2 = arraySeleccionados[1];
    }
};
//variables donde guardo el div donde están los personajes (DOM)
let personaje1 = document.getElementById("pj");
let personaje2 = document.getElementById("pj1");
let personaje3 = document.getElementById("pj2");
let personaje4 = document.getElementById("pj3");
//Función flecha para pintar por pantalla los dos personajes
const muestraPersonaje = () => {

    document.getElementById("imagenJugador1").innerHTML =
        `<img class="image_size" src="${pers1.image}">
                        <div>
                          <p>${pers1.name}</p>
                          <p>${pers1.power}</p>
                        </div>`;

    document.getElementById("imagenJugador2").innerHTML =
        `<img class="image_size" src="${pers2.image}">
                        <div>
                          <p>${pers2.name}</p>
                          <p>${pers2.power}</p>
                        </div>`;

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Funcion para simular la batalla, ira en el onclick del button Fight
const simularBatalla = async () => {
    let alive = true;
    cambiaPantalla(3)
    muestraPersonaje()

    //Guardo en una constante el contenido del div clase mensajes
    const mensajesDiv = document.querySelector('.mensajes');
    //Sin PJ seleccionados no hay pelea
    if (!pjSelec1 || !pjSelec2) {
        alert("Debes seleccionar personajes");
    } else {
        while (alive) {
            if (alive) {
                mensajesDiv.innerHTML = `TURNO DE ${pjSelec1.name}`;
                await sleep(1000);
                mensajesDiv.innerHTML = `Personaje ${pjSelec1.name} ataca a ${pjSelec2.name}`;
                await sleep(1000);
                console.log(
                    `\t${pjSelec1.name} : ${pjSelec1.power} / ${pjSelec2.name} : ${pjSelec2.power}`
                );
                await sleep(1000);
                pjSelec2.getHurt(pjSelec1.hurt);
                alive = pjSelec2.power > 0;
                console.log(
                    `\t${pjSelec1.name} : ${pjSelec1.power} / ${pjSelec2.name} : ${pjSelec2.power}`
                );
            }

            if (alive) {
                console.log(`TURNO DE ${pjSelec2.name}`);
                console.log(`Personaje ${pjSelec2.name} ataca a ${pjSelec1.name}`);
                console.log(
                    `\t${pjSelec2.name} : ${pjSelec2.power} / ${pjSelec1.name} : ${pjSelec1.power}`
                );

                pjSelec1.getHurt(pjSelec2.hurt);
                alive = pjSelec1.power > 0;
                console.log(
                    `\t${pjSelec2.name} : ${pjSelec2.power} / ${pjSelec1.name} : ${pjSelec1.power}`
                );
            }
        }
//Ternaria para indicar qué personaje ha ganado.
        pjSelec1.power === 0
            ? console.log(`${pjSelec2.name} Ha ganado`)
            : console.log(`${pjSelec1.name} Ha ganado`);
    }
};





