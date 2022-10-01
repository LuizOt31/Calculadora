const containerNum = document.querySelector('.numeros')
const containerOperacao = document.querySelector('.operacoes')
const tela = document.querySelector(".tela2")
const tela1 = document.querySelector(".tela1")
const header = document.querySelector('.header')
let divisoesNum
let divisoesOp
let numbers = 0

let operacaoMat = {
    number1: 0,
    operation: 0,
    number2: 0,
}
let resultado = 0


digitosNum(0)
digitosOperacao(7)
containerNum.lastChild.value = ','
let numeros = document.querySelectorAll('.digitosCalc')
let operacoes = document.querySelectorAll('.digitosOperacao')
let operacoes5 = document.getElementsByClassName('.digitosOperacao')
escreverAsOperacoes(operacoes)
operacoes[5].classList.replace('digitosOperacao','igual')
operacoes[1].classList.replace('digitosOperacao','resetar')
operacoes[3].classList.replace('digitosOperacao','apagar')
numeros[9].style = "grid-column: span 2"


containerNum.addEventListener('click', (e) => {
    if (e.target.matches('.digitosCalc')) {
        if (operacaoMat.operation == 0) {

            if (operacaoMat.number1 == 0) {
                operacaoMat.number1 += parseInt(e.target.value)
            } else {
                operacaoMat.number1 = (operacaoMat.number1 * 10) + parseInt(e.target.value)
            }
            tela.innerHTML = operacaoMat.number1

        } else {
            if (operacaoMat.number2 == 0) {
                operacaoMat.number2 += parseInt(e.target.value)
            } else {
                operacaoMat.number2 = (operacaoMat.number2 * 10) + parseInt(e.target.value)
            }
            tela.innerHTML = operacaoMat.number2

        }
    }
})

containerOperacao.addEventListener('click', (e) => {
    if (e.target.matches('.digitosOperacao')) {
        operacaoMat.operation = e.target.value
        tela.innerHTML = operacaoMat.operation
    }
    if (e.target.matches('.igual')){
        if ((operacaoMat.number1 != 0) && (operacaoMat.number2 != 0) && (operacaoMat.operation != 0)){
            conta(operacaoMat)
        }
    }
    if (e.target.matches('.resetar')){
        operacaoMat.number1 = 0
        operacaoMat.number2 = 0
        operacaoMat.operation = 0
        tela.innerHTML = 0
    }
    if (e.target.matches('.apagar')){
        apagar(operacaoMat)
        escreverTela1(operacaoMat)
    }
})


function apagar(a){
    if((a.number2 != 0) || (a.operation != 0)){
        a.number2 = (a.number2 - (a.number2 % 10)) / 10
        tela.innerHTML = a.number2
    } else {
        a.number1 = (a.number1 - (a.number1 % 10)) / 10
        tela.innerHTML = a.number1
    }
}


//AQUI ESTA APENAS AS FUNCOES PARA CRIAR AS DIVS, NOMEAR E DAR OS
function digitosNum(col) {
    for (let i = 11, y = 7, b = 0; i > col; i--) {
        if (b == 3) {
            b = 0
            y = y - 6
            if (y == -2) {
                y = 0
            }
        }
        divisoesNum = document.createElement('input')
        divisoesNum.type = 'button'
        divisoesNum.value = y
        containerNum.appendChild(divisoesNum).className = 'digitosCalc'
        y++
        b++
    }
}
function digitosOperacao(quantidade) {
    for (let j = 0; j < quantidade; j++) {
        divisoesOp = document.createElement('input')
        divisoesOp.type = 'button'
        containerOperacao.appendChild(divisoesOp).className = 'digitosOperacao'
    }
}
function escreverAsOperacoes(a) {
    a[0].value = '+'
    a[1].value = 'ce'
    a[2].value = '-'
    a[3].value = 'a'     //!!!NAO ESQUEÇA DE MUDAR
    a[4].value = 'x'
    a[5].value = '='
    a[5].style = "grid-row: span 2;"
    a[6].value = '/'
}


function conta (a){
    if(a.operation == '+'){
        resultado = a.number1 + a.number2
    } else if (a.operation == 'x'){
        resultado = a.number1 * a.number2
    } else if (a.operation == '/'){
        resultado = a.number1 / a.number2
    } else if (a.operation == '-'){
        resultado = a.number1 - a.number2
    }
    tela.innerHTML = resultado
    tela1.innerHTML = `${a.number1} ${a.operation} ${a.number2} = ${resultado}`
    a.number1 = resultado
    a.number2 = 0
    a.operation = 0
    
}
