function inserir (numero) {
    let num = document.querySelector('.visor').innerHTML
    document.querySelector('.visor').innerHTML = num + numero
}

function apagar() {
    let resultado = document.querySelector('.visor').innerHTML
    document.querySelector('.visor').innerHTML = resultado.substring(0, resultado.length -1)
}