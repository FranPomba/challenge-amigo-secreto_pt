//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    amigo = input.value;
    if (amigo == "") {
        alert('Por favor insira um nome')
    } else {
        nomes.push(amigo);
        input.value = "";
    }
}