const user = document.querySelector('#user')
const pass = document.querySelector('#pass')

document.querySelector('form').addEventListener('submit', enviar)

function enviar(e){
    if(user.value == ''){
        e.preventDefault() // não deixa enviar se estiver vazio
        document.querySelector('#span1').style.color = 'red'
        document.querySelector('#span1').innerHTML = "O nome é obrigatório"
        user.focus()
    } else if(pass.value == ''){
        
    }
}