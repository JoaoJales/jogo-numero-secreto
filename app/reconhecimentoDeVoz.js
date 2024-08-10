const elementoChute = document.querySelector('#chute')



window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    var chute = e.results[0][0].transcript
    exibeChuteNaTela (chute)
    verificaSeValorValido(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Voce disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', ()=> recognition.start())