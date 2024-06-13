const input = document.getElementById("inputInteracao")
const contadorTexto = document.getElementById("contador")

input.addEventListener('keydown',(event)=>{
    if(event.key == "Enter"){
        executarLoop();
    }
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Função assíncrona que executa o loop while com pausas
async function executarLoop() {
    let cont = 0;
    const valorWhile = input.value
    while (valorWhile > cont) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        contadorTexto.style.backgroundColor = `rgb(${r},${g},${b})`;
        cont++;            
        contadorTexto.textContent = "Mudança de cor=" + cont
        await sleep(3000)
    }
    contadorTexto.style.backgroundColor = "#3972A2"
    contadorTexto.textContent = "Mudança de cor=X"
}

