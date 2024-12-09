function inserir (numero) {
    let num = document.querySelector('.conta').innerHTML
    document.querySelector('.conta').innerHTML = num + numero
}

function verificaop () {
    let conta = document.querySelector('.conta').innerHTML
    const operadores = ['+', '-', '*', '/']
    return operadores.includes(conta.slice(-1))
}

function inserirop (numero) {
    if (!verificaop ()) {
        let op = document.querySelector('.conta').innerHTML
        document.querySelector('.conta').innerHTML = op + numero
    }
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
        try {
            document.querySelector('.visor').innerHTML = eval(resultadocalculadora)
        } catch (error) {
            alert('Sua equação está incorreta, refaça!')
        }
    }
}