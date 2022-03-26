// var nome = 'marcelo'
// console.log(nome)

function validarDados() {
    window.event.preventDefault()

    if (document.form.nome.value == '') {
        alert('Campo Nome Obrigatório')
        document.form.nome.focus()
    } else if (document.form.email.value == '') {
        alert('Campo E-mail Obrigatório')
        document.form.email.focus()
    } else if (document.form.email.value.indexOf('@') == -1 || document.form.email.value.indexOf('.') == -1) {
        alert('Digite um E-mail Válido')
        document.form.email.focus()
    } else if (document.form.assunto.value == '') {
        alert('Campo Assunto Obrigatório')
        document.form.assunto.focus()
    } else if (document.form.mensagem.value == '') {
        alert('A Mensagem é Obrigatória')
        document.form.mensagem.focus()
    }
}
document.querySelector('form').addEventListener('submit', validarDados)
