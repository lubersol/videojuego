// MOSTRAR CAPA PERSONAJES Y OCULTAR PAGINA PRINCIPAL
function display(){
    let clic = 1;
    if(clic==1){
        document.getElementById("container").style.display='block';
        document.getElementById("capaGeneral").style.display='none';
        clic = clic+1;
    }else{
        document.getElementById("container").style.display='none';
        document.getElementById("capaGeneral").style.display='block';
        clic = 1;
    }
}
