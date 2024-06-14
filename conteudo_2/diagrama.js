const blocos = document.getElementsByClassName("bloco");
const posicoes = document.getElementsByClassName("posicaoBloco");

let blocoAtual = null;

// Função para restaurar o bloco para a lista original
function resetarBloco(bloco) {
    lugar = document.getElementById("blocosDisponiveis")
    lugar.appendChild(bloco)
}

// Função para lidar com o início do arrasto
function handleDragStart(e) {
    blocoAtual = e.target;
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
        blocoAtual.style.display = "none";
    }, 0);
}

// Função para lidar com o fim do arrasto
function handleDragEnd(e) {
    setTimeout(() => {
        blocoAtual = null;
    }, 0);
}

// Função para permitir soltar na posição
function handleDragOver(e) {
    e.preventDefault();
}

// Função para lidar com a ação de soltar
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
        bloco.style.fontSize = "12px";
        bloco.style.display = "flex";
        bloco.style.justifyContent = "center";
        bloco.style.alignItems = "center";
    } else {
        window.alert("Bloco na posição incorreta! Tente novamente");
        resetarBloco(bloco);
    }
}

// Adiciona eventos de arrastar e soltar para cada bloco
for (let i = 0; i < blocos.length; i++) {
    blocos[i].draggable = true;
    blocos[i].ondragstart = handleDragStart;
    blocos[i].ondragend = handleDragEnd;
}

// Adiciona eventos de arrastar e soltar para cada posição
for (let i = 0; i < posicoes.length; i++) {
    posicoes[i].ondragover = handleDragOver;
    posicoes[i].ondrop = handleDrop;
}
