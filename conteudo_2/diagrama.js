const blocos = document.getElementsByClassName("bloco");
const posicoes = document.getElementsByClassName("posicaoBloco");

let blocoAtual = null;

for (let i = 0; i < blocos.length; i++) {
    blocos[i].draggable = true;
    blocos[i].ondragstart = (e) => {
        blocoAtual = e.target;
        e.dataTransfer.setData("text/plain", e.target.id);
    };
}

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
            bloco.style.paddingLeft = "40px";
            bloco.style.paddingRight = "40px";
        } else {
            window.alert("Bloco na posição incorreta! Tente novamente");
            if (bloco.parentElement) {
                bloco.parentElement.removeChild(bloco);
            }
            document.getElementById("blocosDisponiveis").appendChild(bloco);
        }
    };
}