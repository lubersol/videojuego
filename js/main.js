// MOSTRAR CAPA PERSONAJES Y OCULTAR PAGINA PRINCIPAL
function display() {
    let clic = 1;
    if (clic == 1) {
        document.getElementById("pantalla2").style.display = 'block';
        document.getElementById("capaGeneral").style.display = 'none';
        clic = clic + 1;
    } else {
        document.getElementById("pantalla2").style.display = 'none';
        document.getElementById("capaGeneral").style.display = 'block';
        clic = 1;
    }
}

//Declaracion de variables del juego

let arrayPersonajes = [];

//ELIJO DOS PERSONAJES Y LOS GUARDO
const elegirPersonaje = (personaje) => {

    if (arrayPersonajes.length < 2) {

        arrayPersonajes.push(personaje);

        if (arrayPersonajes.length == 2) {
            alert(`Ya has escogido los 2 personajes: ${arrayPersonajes} PULSA START!`);
            return;
        }
        console.log(arrayPersonajes);
        console.log(arrayPersonajes.length);

    }
}

const CambiaPantalla = (valor) => {
    console.log("probando que funciona");
    //Ahora se a que pantalla quiero dirigirme al concatenar pantalla + valor que viene
    //por parámetro.
    let pantallaDestino = "pantalla" + valor;
    
    //A continuación creo un array con todas pantallas.
    let arrayPantallas = ["pantalla3","pantalla4","pantalla5"];
    
    //El siguiente paso es incluir en arrayPantallas, todas las pantallas MENOS la de destino, para ello usamos
    //filter.
    arrayPantallas = arrayPantallas.filter(val => !pantallaDestino.includes(val));
    console.log("probando el filtro");
    //Primero habilitamos la fase a la que queremos ir
    
    document.getElementById(pantallaDestino).style.display = "flex";
    
    //Finalmente deshabilitamos el resto
    
    document.getElementById("pantalla2").style.display="none";
    // for(let pantalla of arrayPantallas){
    //     document.getElementById(pantalla).style.display = "none";
    // }
}
const player1Selected = document.getElementById("goodRoster");
const player2Selected= document.getElementById("goodGuys");

class Player {
    constructor(nombre, ataque, suerte) {
        this.nombre = nombre;
        this.ataque = ataque;
        this.suerte = suerte;
        this.vida = 200;
    }

    recibirDaño = (damage) =>{
        this.vida -= damage;
    }
}

//INSTANCIO PLAYER 1, 2, 3 Y 4

const player1 = new Player("Yennefer", 30, 50);
const player2 = new Player("Ciriana", 60, 20);
const player3 = new Player("Gerald de Rivia", 50, 40);
const player4 = new Player("Maribol", 25, 10);
 
const fighters = [player1,player2,player3,player4];



// let fighter1;
// let fighter2;
// let goodPlayers = "";
// let evilPlayers = "";

// //GOOD PLAYERS VIEW 2 - CHOOSING A PLAYER

// const displayGoodPlayers = () =>{
//     for (let fighter in goodFighters) {
//         goodPlayers += `<div class="card" onclick="selectGoodPlayer(${fighter})
//         "id="fighter${fighter}" style="background-image: url('${goodFighters[fighter].image}');">
//         <div class="text">Name: ${
//             goodFighters[fighter].name
//         } </div> <div class="text">Resistency: ${
//             goodFighters[fighter].resistencia
//         }</div> <div class="text">Strenght: ${
//             goodFighters[fighter].strenght
//         }</div> <div class="text">Life: ${goodFighters[fighter].life}</div> </div>`;
//       }
//       rosterGoodFighters.innerHTML = goodPlayers;
//     };

// displayGoodPlayers();  

// let goodGuys = document.getElementById("goodGuys");

// const selectGoodPlayer = () => {
//     let displayGoodPlayer = "";
//     for (let character of selectedFighters) {
//         displayGoodPlayer += `<div class="card" onclick="selectGoodPlayer(${fighter})"id="fighter${fighter}" style="background-image: url('${goodFighters[fighter].image}');">  <div class="text">Name: ${
//             goodFighters[fighter].name
//         } </div> <div class="text">Resistency: ${
//             goodFighters[fighter].resistencia
//         }</div> <div class="text">Strenght: ${
//             goodFighters[fighter].strenght
//         }</div> <div class="text">Life: ${goodFighters[fighter].life}</div> </div>`
    
//     }
//     player1Selected.innerHTML = displayGoodPlayer;
//   };


// Esta debería recorrer el array de seleccionados y pintar el seleccionado en el HTML, pero no funciona...




// const selectGoodPlayer = () => {
//     let selectedPlayer = "";
//     for (let player of goodFighters) {
//         selectedPlayer += `<div class="card" style="background-image: url('${player.image}');"> <div class="text">Name: ${player.name} </div>`;
//     }

//     player1Selected.innerHTML = selectedPlayer;
//   };
  

/*
ONCLICK FUNCTION IN ORDER TO SELECT THE PLAYER 1 -> NOT WORKING
*/





//   const selectGoodPlayer = (pos) => {
//     // Solo seleccionamos mientras no superemos el limite
//     if (selectedFighters.length < maxFighters) {
//         selectedFighters.push(goodFighters[parseInt(pos)]);
  
//       //Como ya lo tenemos seleccionado, no queremos que se vuelva a seleccionar
//       document.getElementById("card" + pos).style.pointerEvents = "none";
//       document.getElementById("card" + pos).style.backgroundColor = "grey";
  
//       displayGoodPlayers();
  
//     }
//   };
  
//   const asignToFight = () => {
//     if (selectedFighters[0]) {
//         fighter1 = selectedFighters[0];
//     }
  
//     if (selectedFighters[1]) {
//         fighter2 = selectedFighters[1];
//     }
//   };

  /*
  ESTILO PARA APLICARLE AL BOX DEL PLAYER SELECCIONADO


    background-image: url(/images/blackAdam.png);
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  
  
  */

//EVIL PLAYERS VIEW 3 - CHOOSING AN OPPONENT PLAYER
// let badGuys = document.getElementById("badGuys");

//     const displayEvilPlayers = () =>{
//         for (let fighter in evilFighters) {
//             evilPlayers += `<div class="card" id="fighter${fighter}" style="background-image: url('${evilFighters[fighter].image}');">  <div class="text">Name: ${
//                 evilFighters[fighter].name
//             } </div> <div class="text">Resistency: ${
//                 evilFighters[fighter].resistencia
//             }</div> <div class="text">Strenght: ${
//                 evilFighters[fighter].strenght
//             }</div> <div class="text">Life: ${evilFighters[fighter].life}</div> </div>`;
//           }
//           rosterEvilFighters.innerHTML = evilPlayers;
//         };





//     const displayEvilPlayer = () => {
//         let selectedPlayer = "";
//         for (let player of evilFighters) {
//             selectedPlayer += `<div class="card" style="background-image: url('${player.image}');"> <div class="text">Name: ${player.name} </div>`;
//         }
    
//         player2Selected.innerHTML = selectedPlayer;
//       };

//     displayEvilPlayers();

// //SPLICE PARA SACAR EL FIGHTER DEL ARRAY

// const Atacar = () => {
//     goodFighters[0].recibirDaño(evilFighters[3].strenght);
//     console.log(goodFighters[0].life);
// }


// // console.log(superman.life);

// // console.log(docManhattan.life);








// let partida = {

//     //propiedades
//     equipo1: [],
//     equipo2: [],


//     //métodos

//     escoge1(idLuchador){
//         //player 1 selección de personajes.

//         /*introducimos los luchadores escogidos en su array correspondiente.
//           usamos el diccionario-traductor allplayers con la idLuchador como referencia para 
//           direccionar a la clase instanciada*/
//         this.equipo1.push(allplayers[idLuchador]);

//         //comprobamos el array del primero equipo por consola.
//         console.log(this.equipo1);
//     },

//     escoge2(){
//         //repetiremos la operación del primer equipo, en este caso hemos de averiguar como 
//         //hacerlo para no poder escoger luchadores repetidos. 
//     },


// }