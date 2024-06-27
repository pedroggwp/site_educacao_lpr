const blocos = document.getElementsByClassName("bloco");
const posicoes = document.getElementsByClassName("posicaoBloco");
const modalCerto = document.getElementById("modal_certo");
const btContinuar = document.getElementById("bt_continuar");

const body = document.getElementsByTagName("body")[0];

let blocoAtual = null;

// Função para resetar o bloco
function resetarBloco(bloco) {
    let lugar = document.getElementById("blocosDisponiveis");
    lugar.appendChild(bloco);
}

// Função para deixar o bloco ser arrastado
function handleDragStart(e) {
    blocoAtual = e.target;
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
        blocoAtual.style.display = "none";
    }, 0);
}

// Função que se ele errar o bloco de lugar ele volta para o normal 
function handleDragEnd(e) {
    setTimeout(() => {
        blocoAtual.style.display = "flex";
    }, 0);
}

// Função que deixa soltar o bloco em uma das opções
function handleDragOver(e) {
    e.preventDefault();
}

// Função quando soltar o bloco
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
        verificarTodosBlocos();
    } else {
        window.alert("Lugar errado, por favor, tente denovo!");
        resetarBloco(bloco);
    }
}

// Função para verificar se todos os blocos estão na posição correta
function verificarTodosBlocos() {
    let todosCorretos = true;
    for (let i = 0; i < blocos.length; i++) {
        const bloco = blocos[i];
        const posicao = bloco.parentElement.id.replace("posicao", "");
        const blocoPosicao = bloco.getAttribute("data-posicao");
        if (posicao !== blocoPosicao) {
            todosCorretos = false;
            break;
        }
    }
    if (todosCorretos) {
        abrirModalCerto();
    }
}

// Função para abrir o modal
function abrirModalCerto() {
    modalCerto.showModal();
    body.style.overflow = "hidden";
}

// Eventos de arrastar e soltar para cada bloco
for (let i = 0; i < blocos.length; i++) {
    blocos[i].draggable = true;
    blocos[i].ondragstart = handleDragStart;
    blocos[i].ondragend = handleDragEnd;
}

// Eventos de arrastar e soltar para cada posição
for (let i = 0; i < posicoes.length; i++) {
    posicoes[i].ondragover = handleDragOver;
    posicoes[i].ondrop = handleDrop;
}

// Evento para fechar o modal


function fecharModal() {
    console.log("fecharModal")
    modalCerto.close();
    body.style.overflow = "auto";
}

btContinuar.addEventListener("click", fecharModal);
