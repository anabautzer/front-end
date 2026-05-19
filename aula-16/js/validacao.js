const user = document.querySelector('#user')
const pass = document.querySelector('#pass')

document.querySelector('form').addEventListener('submit',(e)=>{
  if(user.value == '' || pass.value == '') e.preventDefault()
})

//deixa todas as spans com a cor vermelha
document.querySelectorAll('span').forEach(e=> e.style.color = 'red')

//Coloca a mensagem se estiver vazio e retira se o usuário preencher
user.addEventListener('blur', ()=>{
    if(user.value == ''){
        document.querySelector('#span1').innerHTML = "O nome é obrigatório!"
    }else{
        document.querySelector('#span1').innerHTML = ''
    }
})

//Coloca a mensagem se estiver vazio e retira se o usuário preencher
pass.addEventListener('blur', ()=>{
    if(pass.value == ''){
        document.querySelector('#span2').innerHTML = "A senha é obrigatória!"
    }else {
        document.querySelector('#span2').innerHTML = ''
    }
})

// function enviar(e){
//     if(user.value == ''){
//         e.preventDefault()
//         document.querySelector('#span1').style.color = 'red'
//         document.querySelector('#span1').innerHTML = "O nome é obrigatório!"
//         user.focus()
//     }else if(pass.value == ''){
//         e.preventDefault()
//         document.querySelector('#span2').style.color = 'red'
//         document.querySelector('#span2').innerHTML = "A senha é obrigatória!"
//         pass.focus()
//     }
// }