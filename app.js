// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    let entrada = document.getElementById("amigo");
    
    if(entrada.value === ""){
        alert("Por favor, inserte un nombre.");
    }else{
        if(amigos.includes(entrada.value)){
            alert("El amigo ya se fue ingresado");
        }else{
            amigos.push(entrada.value);
            entrada.value = "";
            agregarAmigoLista();
        }
    }

}

function agregarAmigoLista(){
    let agregarAmigo = "";
    for (i = 0; i < amigos.length; i++) {
        agregarAmigo = agregarAmigo + `<li>${amigos[i]}</li>`
    } 
    document.getElementById("listaAmigos").innerHTML = agregarAmigo;
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("Se debe de ingresar al menos un amigo");
    }else{
        let amigoSelecionado = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").innerHTML = amigos[amigoSelecionado] 
    }
}


