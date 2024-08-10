function verificaSeValorValido (chute){
    const numero = +chute
    if (chuteIvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido</div>`
        return
    }
    if (numeroMaiorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div> Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou! </h2>
        <h3>O número secreto era ${numeroSecreto} </h3>

        <button id ="jogar-novamente" class ="btn-jogar">Jogar novamente <i class="fa-solid fa-rotate-right"></i> </button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
}

function chuteIvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})