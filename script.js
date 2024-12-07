function inserir (numero) {
    let num = document.querySelector('.conta').innerHTML
    document.querySelector('.conta').innerHTML = num + numero
}

function apagar() {
    let conta = document.querySelector('.conta').innerHTML
    document.querySelector('.conta').innerHTML = conta.substring(0, conta.length -1)
    if (conta.length - 1) {
        let resultado = document.querySelector('.visor').innerHTML
        document.querySelector('.visor').innerHTML = ''
    }

}

function calculo() {
    let resultadocalculadora = document.querySelector('.conta').innerHTML
    if (resultadocalculadora) {
        document.querySelector('.visor').innerHTML = eval(resultadocalculadora)
    }
}