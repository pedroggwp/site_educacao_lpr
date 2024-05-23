// Criando a variável para pegar o bloco
const blocos = document.getElementsByClassName("bloco");
const posicoes = document.getElementsByClassName("posicaoBloco");

// Variável para armazenar o id do bloco sendo arrastado
let blocoAtual = null;

// Adicionando evento onDrag aos blocos
for (let i = 0; i < blocos.length; i++) {
    blocos[i].draggable = true;
    blocos[i].ondragstart = (e) => {
        blocoAtual = e.target;
        e.dataTransfer.setData("text/plain", e.target.id);
    };
}

// Adicionando eventos onDragOver e onDrop às posições dos blocos
for (let i = 0; i < posicoes.length; i++) {
    posicoes[i].ondragover = (e) => {
        e.preventDefault();
    };

    posicoes[i].ondrop = (e) => {
        e.preventDefault();
        const blocoId = e.dataTransfer.getData("text");
        const bloco = document.getElementById(blocoId);
        const posicaoId = e.target.id.replace("posicao", "");
        const blocoPosicao = bloco.getAttribute("data-posicao");

        if (posicaoId === blocoPosicao) {
            e.target.appendChild(bloco);
        } else {
            alert("Bloco na posição incorreta! Tente novamente.");
            document.getElementById("blocosDisponiveis").appendChild(blocoAtual);
        }
    };
}