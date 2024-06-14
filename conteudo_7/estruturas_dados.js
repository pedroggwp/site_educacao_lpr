const  metodos =  document.getElementById("metodos")
const saibaMais = document.getElementById("saiba_mais");
const botaoInteracao = document.getElementById("interacao");
const divInterativo = document.getElementById("interativo")
let cont = 0;

saibaMais.addEventListener("click", () => {
    if (metodos.classList.contains('invisivel')) {
        metodos.classList.remove('invisivel');
    } else {
        metodos.classList.add('invisivel');
    }
});
botaoInteracao.addEventListener("click",()=>{
    cont++;
    const divAdd = document.createElement("div")
    const pAddPos = document.createElement("p")
    pAddPos.innerHTML = "Número do item:" + cont  + "<br>Posição na lista:" + (cont -1)
    divAdd.classList.add("quadrado")
    divAdd.appendChild(pAddPos)
    divInterativo.appendChild(divAdd)
})