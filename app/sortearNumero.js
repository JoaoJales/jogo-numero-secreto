const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}
console.log('Número secreto:', numeroSecreto)

const elemetoMenorValor = document.querySelector('#menor-valor')
elemetoMenorValor.innerHTML = menorValor

const elemetoMaiorValor = document.querySelector('#maior-valor')
elemetoMaiorValor.innerHTML = maiorValor