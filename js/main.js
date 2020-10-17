//la funcion se llama mediante el botón de html con el onclick ="cambiaPantalla(num)"
const cambiaPantalla = (num) => {

    //la switch recibe el num que le decimos al pulsar los diferentes botones
    //  elige el caso que usa segun el num del boton
    switch (num) {

        //el boton de la pagina 1 envia una señal de num 2 onclick="cambiaPantalla(2)"

        case 2:
            document.getElementById('fase1').style.display = "none";
            document.getElementById('fase2').style.display = "flex";
            break;

        //el boton de la pagina 2 envia una señal de num 3 onclick="cambiaPantalla(3)"

        case 3:
            document.getElementById('fase2').style.display = "none";
            document.getElementById('fase3').style.display = "flex";
            break;

        //el boton de la pagina 3 envia una señal de num 1 onclick="cambiaPantalla(1)"

        case 1:
            location.reload()
            break;
    }
}

class Personaje {
    //Constructor basico del personaje
    constructor(name, hp, armor, hurt, image) {
        this.name = name;
        this.hp = hp;
        this.armor = armor;
        this.hurt = hurt;
        this.image = image;
    }

    // Funcion Recibir Daño
    getHurt = (hurt) => {
        const tirada = tirarDado();
        if (tirada === 20) {
            console.log("\tCRITICAL HIT! " + hurt * 2);
            this.hp -= hurt * 2 - this.armor;
        } else if (tirada === 1) {
            console.log("\tHAS FALLADO!");
        } else {
            console.log("\tGOLPE NORMAL " + (hurt - this.armor));
            this.hp -= hurt - this.armor;
        }
    };
}

// Nuestro tirador de dados
const min = 1;
const max = 20;
const tirarDado = () => Math.floor(Math.random() * (max - min + min)) + 1;


const brujosElement = document.getElementById("brujos");
const selectedElement = document.getElementById("selected");

selectedElement.innerHTML = "";

const pers1 = new Personaje("Yennefer", 100, 10, 15, 'img/personajeYennefer.jpg');
const pers2 = new Personaje("Ciri", 100, 5, 15, 'img/personajeCiri.jpg');
const pers3 = new Personaje("Gerald", 100, 8, 35, 'img/personajeGerald.jpg');
const pers4 = new Personaje("Maribol", 100, 5, 20, 'img/personajeMaribol.jpg');


let arrayPJ = [pers1, pers2, pers3, pers4];


let arraySeleccionados = [];
const maximaSeleccionDePJ = 2;


let pjSelec1;
let pjSelec2;


let infoBrujos = "";

const pintarBrujos = () => {
    for (let pos in arrayPJ) {
        infoBrujos += `<div class="pj" id="pj${pos}" onclick="selectPJ(${parseInt(
            pos
        )})" > <div class="text">Name: ${arrayPJ[pos].name
            } <img class="yennefer" src="${arrayPJ[pos].image}" />
           </div> <div class="text">HP: ${arrayPJ[pos].hp
            }</div> <div class="text">Armor: ${arrayPJ[pos].armor
            }</div> <div class="text">Hurt: ${arrayPJ[pos].armor}</div> </div>`;
    }
    brujosElement.innerHTML = infoBrujos;
};
pintarBrujos();

const selectPJ = (pos) => {
    if (arraySeleccionados.length < maximaSeleccionDePJ) {
        arraySeleccionados.push(arrayPJ[parseInt(pos)]);
        document.getElementById("pj" + pos).style.pointerEvents = "none";
        document.getElementById("pj" + pos).style.backgroundColor = "black";

        pintarSeleccionados();

        asignarParaPelear();
    }
};

const pintarSeleccionados = () => {
    let infoSelected = "";
    for (let character of arraySeleccionados) {
        infoSelected += `<div class="pj"> 
                              <div class="text">Name: ${character.name} <img class="yennefer" src="${character.image}" /> 
                              </div> <div class="text">HP: ${character.hp}</div> 
                              <div class="text">Armor: ${character.armor}</div> 
                              <div class="text">Damage: ${character.armor}</div> 
                            </div>`;
    }
    selectedElement.innerHTML = infoSelected;
};

const asignarParaPelear = () => {
    if (arraySeleccionados[0]) {
        pjSelec1 = arraySeleccionados[0];
    }

    if (arraySeleccionados[1]) {
        pjSelec2 = arraySeleccionados[1];
    }
};

let personaje1 = document.getElementById("pj");
let personaje2 = document.getElementById("pj1");
let personaje3 = document.getElementById("pj2");
let personaje4 = document.getElementById("pj3");

const muestraPersonaje = () => {

    document.getElementById("imagenJugador1").innerHTML =
        `<img class="image_size" src="${pers1.image}">
                        <div>
                          <p>${pers1.name}</p>
                          <p>${pers1.hp}</p>
                        </div>`;

    document.getElementById("imagenJugador2").innerHTML =
        `<img class="image_size" src="${pers2.image}">
                        <div>
                          <p>${pers2.name}</p>
                          <p>${pers2.hp}</p>
                        </div>`;

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Funcion para simular la batalla, ira en el onclick del button Luchar
const simularBatalla = async () => {
    let alive = true;
    cambiaPantalla(3)
    muestraPersonaje()
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
                    `\t${pjSelec1.name} : ${pjSelec1.hp} / ${pjSelec2.name} : ${pjSelec2.hp}`
                );
                await sleep(1000);
                pjSelec2.getHurt(pjSelec1.dmg);
                alive = pjSelec2.hp > 0;
                console.log(
                    `\t${pjSelec1.name} : ${pjSelec1.hp} / ${pjSelec2.name} : ${pjSelec2.hp}`
                );
            }

            if (alive) {
                console.log(`TURNO DE ${pjSelec2.name}`);
                console.log(`Personaje ${pjSelec2.name} ataca a ${pjSelec1.name}`);
                console.log(
                    `\t${pjSelec2.name} : ${pjSelec2.hp} / ${pjSelec1.name} : ${pjSelec1.hp}`
                );

                pjSelec1.getHurt(pjSelec2.dmg);
                alive = pjSelec1.hp > 0;
                console.log(
                    `\t${pjSelec2.name} : ${pjSelec2.hp} / ${pjSelec1.name} : ${pjSelec1.hp}`
                );
            }
        }

        pjSelec1.hp === 0
            ? console.log(`${pjSelec2.name} Ha ganado`)
            : console.log(`${pjSelec1.name} Ha ganado`);
    }
};





