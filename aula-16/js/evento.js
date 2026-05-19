const nome = document.querySelector('#idnome')
const span = document.querySelector('#acao')

nome.addEventListener('focus', ()=>{
    nome.style.outlineColor = 'blue'// utilizado em formulários, destacar elementos quando seleciona
    span.innerHTML = 'O usuário acessou o campo!'
})

nome.addEventListener('blur', () => {
    nome.style.borderColor = 'red'
    span.innerHTML = 'O usuário saiu do campo!'
})

const barra = document.querySelector('#barra')
const valor = document.querySelector('#valor')

// barra.addEventListener('change', () => {
//     valor.innerHTML = barra.value // pouco funcional
// })

barra.addEventListener('input', () => {
    valor.innerHTML = barra.value
})

const form = document.querySelector('form')

form.addEventListener('submit', () => {
    alert(`${nome.value}, obrigada por nos visitar!`)
})

const modal = document.querySelector('#modalCafe')
const btnAbrir = document.querySelector('#abrirModal')
const statusTexto = document.querySelector('#status')

btnAbrir.addEventListener('click', () => {
    modal.showModal()
})

modal.addEventListener('close', () => {
    if (modal.returnValue === 'Confirmar'){
        statusTexto.innerHTML = 'Pedido confirmado com sucesso'
    } else {
        statusTexto.innerHTML = 'Pedido cancelado'
    }
        
})