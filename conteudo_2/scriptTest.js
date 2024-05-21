// // Adicionando evento onDrag aos blocos
// for (let i = 0; i < blocos.length; i++) {
//   blocos[i].draggable = true;
//   blocos[i].ondrag = handleDrag;
// }

// // Adicionando eventos onDrag aos campos de posição
// for (let i = 0; i < posicoes.length; i++) {
//   posicoes[i].ondragover = dragOver;
//   posicoes[i].ondrop = soltar;
// }

// // Função para lidar com o evento onDrag
// function handleDrag(e) {
//   e.dataTransfer.setData("text/plain", e.target.id);
//   setTimeout(() => {
//     e.target.style.display = "none";
//   }, 0);
// }

// // Função para o onDragOver
// function dragOver(e) {
//   e.preventDefault();
// }

// // Função para quando soltar o bloco
// function soltar(e) {
//   e.preventDefault();
//   const blocoId = e.dataTransfer.getData("text/plain");
//   const bloco = document.getElementById(blocoId);

//   if (blocoId === "bloco1" && e.target.id === "posicao1") {
//     e.target.appendChild(bloco);
//   } else {
//     document.getElementById("blocosDisponiveis").appendChild(bloco);
//   }
// }