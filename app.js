//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];

atualizarLista()
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    amigo = input.value;
    if (amigo == "") {
        alert('Por favor insira um nome')
    } else {
        nomes.push(amigo);
        input.value = "";
        atualizarLista();
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < nomes.length; i++) {
        lista.innerHTML += `<li> ${nomes[i]} </li>`;
    }
}

function sortearAmigo() {
    if (nomes.length > 0) {
        let indice = Math.floor(Math.random() * nomes.length);
        let nomeSorteado = nomes[indice];
        document.getElementById('resultado').innerHTML =  '<li>' + nomeSorteado + '</li>'; 
    }
}
