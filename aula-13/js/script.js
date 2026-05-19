// alert("Está chamada vem do Javascript externo"), ele lê primeiro o interno e depois o externo
// sequência de comandos, os atributos não são tipados, ele tipa automaticamente

let nome = "Ana Carolina" // declarar uma variável

nome = "Abroba" // assim atribui um novo valor
console.log(nome);

let disciplina = null // sem valor atribuido
console.log(disciplina);

let texto
console.log(texto); // sem definição

// let não deixa sobrescrever uma variável (dar um novo valor)

var turma = "1TDSPI"
console.log(turma); // o ponto e virgula é opcional

// o var deixa sobrescrever uma variável, deixou de ser usado

const faculdade = "FIAP"
console.log(faculdade);


// constante não pode ter troca de valor
// quando tem um erro, ele trava e não continua executando

let idade = 18
console.log(idade);

let altura = 1.67
console.log(altura);

let casado = false
console.log(casado);

let linguagens = ["Java", "Javascript", "Python"]
console.log(linguagens[1]);

let carro = { // criação de um objeto
    cor: "preto",
    portas: 4,
    tipo: "sedan",
    marca: "ford",
    modelo: "abroba",
    correr: function(){alert("Estou correndo")} // função = método
}

// console.log(carro.modelo); // nome do objeto + atributo
// carro.correr() // tipo void

let numFloat = 123.456
console.log(parseInt(numFloat)); // converte um float para inteiro
console.log(numFloat.toString()); // converte um float em String


let numString = "456.789"
console.log(parseFloat(numString)); //normal de acontecer do valor vir em String, para isso, deve converter
console.log(parseInt(numString));
console.log(typeof numString); // mostra que tipo é
console.log(typeof numFloat); // mas não traz que tipo de número é
console.log(Number.parseInt(numString));

let complemento = "Complemento"

let tipo1 = "Com aspas " + complemento + " duplas"
console.log(tipo1);

let tipo2 = 'Com aspas ' + complemento + ' simples'
console.log(tipo2);

let tipo3 = `Este é o ${complemento} Template String` // crase, melhor tipo para adicionar algo
console.log(tipo3);

let pedido = 'Quero um copo d\'água' // a barra \ faz com que o caractere especial apareça sem ser usado no código
console.log(pedido);
console.log(pedido.length);

let txt = "Estão chegando as provas"
console.log(txt.indexOf('as')); // localiza pelo começo
console.log(txt.lastIndexOf('as')); // localiza pelo final
console.log(txt.slice(0,5)); // mostra a partir da localização
console.log(txt.replace("provas", "avaliações")); // substítui

let num1 = "8"
let num2 = 4

console.log(num1 * num2); // adapta o conteúdo e faz o calculo, mas na soma ele não entende

// alert("Este é o alert") // alerta

// const confirma = confirm("Podemos continuar a operação?");console.log(confirma); // traz um ok ou cancelar

// let resposta = prompt("Por favor, deixe sua opinião", "Digite aqui") // usuário interaje, com resposta padrão
// console.log(resposta);

// let nomeCompleto = prompt("Digite seu nome completo")
// let nomeSimples = nomeCompleto.slice(0, nomeCompleto.indexOf(" ")) // para pegar o primeiro nome
// console.log(nomeSimples);
// console.log(`Sejá bem-vinda, ${nomeSimples}`);

let teste1 = "7"
let teste2 = 7

if(teste2 > 5 || teste2 < 10){ // === ele compara valor e tipo, && é e, || é ou
    console.log("Este teste deu positivo");
    
} else if (false){
    console.log("Este teste é o segundo");
    
} else {
    console.log("Este teste deu falso");
}
























