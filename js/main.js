let partida = {

    //propiedades
    equipo1: [],
    equipo2: [],


    //métodos

    escoge1(idLuchador){
        //player 1 selección de personajes.

        /*introducimos los luchadores escogidos en su array correspondiente.
          usamos el diccionario-traductor allplayers con la idLuchador como referencia para 
          direccionar a la clase instanciada*/
        this.equipo1.push(allplayers[idLuchador]);

        //comprobamos el array del primero equipo por consola.
        console.log(this.equipo1);
    },

    escoge2(){
        //repetiremos la operación del primer equipo, en este caso hemos de averiguar como 
        //hacerlo para no poder escoger luchadores repetidos. 
    },


}