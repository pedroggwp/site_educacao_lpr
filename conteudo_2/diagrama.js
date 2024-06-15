const blocos = document.getElementsByClassName("bloco");
const posicoes = document.getElementsByClassName("posicaoBloco");
const modal_erro = document.getElementById("modal_erro")
const bt_continuar = document.getElementsByClassName("bt_continuar")

let blocoAtual = null;

// função para resetar o bloco
function resetarBloco(bloco) {
    lugar = document.getElementById("blocosDisponiveis")
    lugar.appendChild(bloco)
}

// função para deixar o bloco ser arrastado
function handleDragStart(e) {
    blocoAtual = e.target;
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
        blocoAtual.style.display = "none";
    }, 0);
}

// função que se ele errar o bloco de lugar ele volta para o normal 
function handleDragEnd(e) {
    setTimeout(() => {
        blocoAtual.style.display = "flex";
    }, 0);
}

// função que deixar soltar o bloco em uma das opções
function handleDragOver(e) {
    e.preventDefault();
}

// função quando soltar o bloco
function handleDrop(e) {
    e.preventDefault();
    const blocoId = e.dataTransfer.getData("text");
    const bloco = document.getElementById(blocoId);
    const posicaoId = e.target.id.replace("posicao", "");
    const blocoPosicao = bloco.getAttribute("data-posicao");

    if (posicaoId === blocoPosicao) {
        e.target.appendChild(bloco);
        bloco.style.margin = "auto"; 
        bloco.style.padding = "0"; 
        bloco.style.display = "flex";
        bloco.style.justifyContent = "center";
        bloco.style.alignItems = "center";
    } else {
        modal_erro.showModal();
        resetarBloco(bloco);
    }
}

// eventos de arrastar e soltar para cada bloco
for (let i = 0; i < blocos.length; i++) {
    blocos[i].draggable = true;
    blocos[i].ondragstart = handleDragStart;
    blocos[i].ondragend = handleDragEnd;
}

// eventos de arrastar e soltar para cada poisção
for (let i = 0; i < posicoes.length; i++) {
    posicoes[i].ondragover = handleDragOver;
    posicoes[i].ondrop = handleDrop;
}

for (let i = 0; i < bt_continuar.length; i++) {
    bt_continuar[i].addEventListener('click', fechar_modal)
}

function fechar_modal() {
    modal_erro.close()
}
