let teste = 1 // para switch, começa com uma varivel

switch (teste) {
    case 1:
        console.log("Abre a página 1");
        break;
    case 2:
        console.log("Abre a página 2");
        break;
    default:
        console.log("Página solicitada não existe");
        break;
}

for (let index = 0; index < 5; index++) {
    console.log(`Este é a verificação ${index}`);
    
}

let frutas = ['banana', 'maçã', 'uva', 'pêra']

for (let index = 0; index < frutas.length; index++) { //trás o elemento e a fruta
    console.log(`A fruta da vez é ${frutas[index]} e o número ${index}`);
    
}

for (let fruta in frutas) { // trás a posição do elemento
    console.log(`A fruta está na posição ${fruta}`);
    
}

for(let fruta of frutas){ //trás o elemento, mas de forma rápida
    console.log(`A fruta da vez é ${fruta}`);
    
}

let cont = 0

while (cont < 10) {
    console.log(`Esta é a volta ${cont}`);
    cont++
}

let cont2 = 0

do {
     console.log(`Esta é a volta ${cont2}`);
    cont++
    
} while (cont2 < 0);

// function aviso() { // pode ser anonima ou receber um nome, como se fosse um void
//     alert("Este é um teste de função")
// }

// aviso()

function soma(num1, num2) { // função que recebe 2 argumentos com return
    return num1 + num2
}

console.log(soma(5, 4));

let titulo = document.getElementById('titulo') //.innerHTML pega só o título

console.log(titulo);

let texto = document.getElementById('texto') // .value - tomar cuidado em pegar o elemento e pegar o seu conteudo, o value só deve ser usado depois que já é atribuido, se não retorna sem valor

function mudar(params) {
    titulo.innerHTML = texto.value
}

let noticia = document.getElementsByClassName('noticia')[0] // plural para classes, usando posição para mostrar o elemento, não pegando o array todo
console.log(noticia);

// queryselector

document.querySelector('#titulo').style.color = 'blue' // ele pega qualquer elemento, # é ára id

document.querySelector('#titulo').style.backgroundColor = 'lightblue'

console.log(document.querySelectorAll('li')); // trás todos os elementos

console.log(document.querySelector('li')); // só trás o primeiro elemento
