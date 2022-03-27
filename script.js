// var nome = 'marcelo'
// console.log(nome)

function inputValidation() {
    if (document.form.nome.value == '') {
        alert('Campo Nome Obrigatório')
        document.form.nome.focus()
    } else if (document.form.email.value == '') {
        alert('Campo E-mail Obrigatório')
        document.form.email.focus()
    } else if (document.form.email.value.indexOf('@') == -1) {
        alert('Digite um E-mail Válido')
        document.form.email.focus()
    } else if (document.form.assunto.value == '') {
        alert('Campo Assunto Obrigatório')
        document.form.assunto.focus()
    } else if (document.form.mensagem.value == '') {
        alert('A Mensagem é Obrigatória')
        document.form.mensagem.focus()
    }
    if (document.form.nome.value == '' || document.form.email.value == '' || document.form.assunto.value == '' || document.form.mensagem.value == '') {
        window.event.preventDefault()
    }
    if (document.form.nome.value > 0 && document.form.email.value > 0 && document.form.assunto.value > 0 && document.form.mensagem.value > 0) {
        window.event.stopPropagation()
    }
}

document.querySelector('form').addEventListener('submit', inputValidation)

function copyMail() {
    const clip = navigator.clipboard
    const text = document.querySelector('#look')
    clip.writeText(text.innerText).then(() => alert('E-mail Copiado'))
}

document.querySelector('#look').onclick = copyMail
