// // criando a variavel para pegar o bloco
// const blocos = document.getElementsByClassName("bloco");

// // criando o for para adicionar evento onDrag aos blocos
// for (let i = 0; i < blocos.length; i++) {
//     blocos[i].draggable = true;
// }

// // foreach para o ondrag
// // on drag, quando está segurando
// Array.from(blocos).forEach((bloco) => {
//     bloco.ondrag = () => {
//     };
// })

// // foreach para o ondragstart 
// // on drag start, quando comecar a segurar
// Array.from(blocos).forEach((bloco) => {
//     bloco.ondragstart = () => {
//     };
// })

// // foreach para o ondragend 
// // on drag end, quando parar de segurar
// Array.from(blocos).forEach((bloco) => {
//     bloco.ondragend = () => {
//     };
// })

// // foreach para o ondragenter 
// // on drag enter, quando entrar
// Array.from(blocos).forEach((bloco) => {
//     bloco.ondragenter = () => {
//     };
// })

// // foreach para o ondragleave 
// // on drag leave, quando sair
// Array.from(blocos).forEach((bloco) => {
//     bloco.ondragleave = () => {
//     };
// })

// // foreach para o ondragover 
// // on drag over, quando estiver sobre o bloco
// Array.from(blocos).forEach((bloco) => {
//     bloco.ondragover = () => {
//     };
// })

// // foreach para o ondrop
// // on drop, quando soltar
// Array.from(blocos).forEach((bloco) => {
//     bloco.ondrop = () => {
//     };
// })


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