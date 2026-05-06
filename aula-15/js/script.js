
let botao1 = document.querySelector('#btn1') // pode usar o getelement

// botao1.onclick = function(){
//     alert('Olá pessoal')
// }

// botao1.onclick = ()=> {alert('Olá pessoal')} // instrução rápido, construtor com a seta apontando para o que irá executar

// botao1.addEventListener('click', ()=>{alert('Olá pessoal')}) // melhor para utilizar, listener - escutando/sendo preparado para receber uma ordem

botao1.addEventListener('click', clicou)
botao1.addEventListener('mouseenter', entrou) // faz mudar o que é quando passa o mouse
botao1.addEventListener('mouseout', sair) // altera e muda quando o mouse sai da região

function clicou(){
    botao1.innerHTML = 'Clicou, não entra e nem sai mais' // troca o contéudo que está entre as tags
    botao1.removeEventListener('mouseenter', entrou) // desabilita a função
    botao1.removeEventListener('mouseout', sair)
}

function entrou(){
    botao1.innerHTML = 'Entrou'
}

function sair(){
    botao1.innerHTML = 'Saiu'
}

let botoes = document.querySelectorAll('.item') // seleciona todas

// botoes.forEach(
//     function(item, i) { // primeiro valor é o que é e o segundo é o indice
//     item.addEventListener('click', ()=> console.log(`Clicou no item ${i+1}`))
// }
// )

botoes.forEach((item, i) => { // primeiro valor é o que é e o segundo é o indice
    item.addEventListener('click', ()=> console.log(`Clicou no item ${i+1}`))
}
)

let div1 = document.querySelector('#div1')

div1.addEventListener('mouseenter', entrar)
div1.addEventListener('mouseout', sair)
div1.addEventListener('click', clicar)
div1.addEventListener('contextmenu', clickDireito) // botão direito do mouse, abrir as opções
div1.addEventListener('dblclick', clickDuplo)
div1.addEventListener('mousedown', apertou)
div1.addEventListener('mouseup', soltar)

function entrar(){
    div1.innerHTML = 'Você entrou'
    div1.style.background = 'lightcoral'
}

function sair(){
    div1.innerHTML = 'Você saiu'
    div1.style.background = 'lightgreen'
}

function clicar(){
    div1.innerHTML = 'Você clicou'
    div1.style.background = 'purple'
}

function clickDireito(e){
    e.preventDefault() // evita ed abrir as opções do site
    div1.innerHTML = 'Click direito'
    div1.style.background = 'lightyellow'

}

function clickDuplo(){
    div1.innerHTML = 'Click duplo'
    div1.style.background = 'orange'
}

function apertou(){
    div1.innerHTML = 'Apertou'
    div1.style.background = 'red'
}

function soltar(){
    div1.innerHTML = 'Soltou'
    div1.style.background = 'blue'
}

div1.addEventListener('mousemove', mover)

function mover(e){
    let x = e.offsetX
    let y = e.offsetY
    let res = document.querySelector('#res')
    res.innerHTML = `Posição X: ${x} e Y: ${y}`
}

let texto = document.querySelector('#texto') // capturar o valor

// texto.addEventListener('keydown', ()=>{ // mas ele só pega depois do segundo click, por não ter nenhum valor
//     let resultado = document.querySelector('#resp')
//     resultado.innerHTML = texto.value
// })

texto.addEventListener('keyup', ()=>{
    let resultado = document.querySelector('#resp')
    resultado.innerHTML = texto.value
})

let px = 0
let py = 0

document.addEventListener('keydown', e =>{ // chamando o evento no documento todo
    div1.style.position = 'relative'
    let tecla = e.key

    if(tecla == 'ArrowLeft'){
        px -= 10
        div1.style.left = px + 'px'
    }else if(tecla == 'ArrowUp'){
        py -= 10
        div1.style.top = py + 'px'
    }else if(tecla == 'ArrowRight'){
        px += 10
        div1.style.left = px + 'px'
    }else if(tecla == 'ArrowDown'){
        py +=10
        div1.style.top = py + 'px'
    }

    console.log(tecla)
})
