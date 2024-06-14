const otherOperators = document.getElementsByClassName("others_operators")[0];
// const knowMore = document.getElementById("saiba_mais");

// knowMore.addEventListener("click", () => {
//     if (otherOperators.classList.contains('invisible')) {
//         otherOperators.classList.remove('invisible');
//     } else {
//         otherOperators.classList.add('invisible');
//     }
// });

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/') + 1);
filename = filename.replace(/\.[^/.]+$/, "");

document.querySelectorAll('.menu a').forEach(function(element) {
    var href = element.getAttribute('href');
    
    // Verifica se o href contém "operadores"
    if (href.includes("operadores")) {
        element.parentNode.classList.add('active');
    } else {
        element.parentNode.classList.remove('active');
    }
});

const input = document.getElementById("inputInteracao")
const contadorTexto = document.getElementById("contador")

// input.addEventListener('keydown',(event)=>{
//     if(event.key == "Enter"){
//         executarLoop();
//     }
// })

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
const btDesafio = document.getElementsByClassName("desafio");

document.querySelector(".desafio").addEventListener("click", () => {
  console.log("clicou");
  const perguntas = [
    {
      code: "x = 5 <br> y = 7 <br> z = y + x",
      pergunta: "Qual o valor de <strong>Z</strong>?",
      alternativas: ["5", "7", "2", "12"],
      correta: "12",
    },
    {
      code: "a = 3 <br> b = 4 <br> c = a * b",
      pergunta: "Qual o valor de <strong>C</strong>?",
      alternativas: ["7", "12", "10", "15"],
      correta: "12",
    },
    {
      code: "m = 8 <br> n = 2 <br> p = m / n",
      pergunta: "Qual o valor de <strong>P</strong>?",
      alternativas: ["4", "6", "8", "10"],
      correta: "4",
    },
  ];


  const fundoQuiz = document.getElementById("fundo-quiz");
  const popUpPerguntas = document.getElementById("popup-perguntas");
  const popUpRespostas = document.getElementById("popup-acertos");
  const acertosLabel = document.getElementById("quantidadeAcertos");
  const errosContainer = document.getElementById("erros");
  const nextFechar = document.getElementById("next-fechar");


  let perguntaAtual = 0;
  let acertos = 0;
  let ultimaAlternativaClicada = null;
  let alternativaSelecionada = null;
  let perguntasErradas = [];

  popUpPerguntas.showModal();

  function atualizarQuiz() {
    const codeBody = document.querySelector(".code-body p");
    const quizPergunta = document.querySelector(".quiz-pergunta");
    const alternativas = document.getElementsByClassName("alternativa");
    const btnCancelar = document.querySelector("#last-quiz");

    if (perguntaAtual > 0) {
      btnCancelar.textContent = "voltar";
    } else {
      btnCancelar.textContent = "cancelar";
    }

    codeBody.innerHTML = perguntas[perguntaAtual].code;
    quizPergunta.innerHTML = `Pergunta ${perguntaAtual + 1}: ${
      perguntas[perguntaAtual].pergunta
    }`;

    for (let i = 0; i < alternativas.length; i++) {
      alternativas[i].textContent = perguntas[perguntaAtual].alternativas[i];
      alternativas[i].classList.remove("clicado");
    }

    alternativaSelecionada = null;
  }

  console.log(document.querySelector("#next-quiz"));
  document.querySelector("#next-quiz").addEventListener("click", () => {
    console.log("entrou no bt a");
    if (
      alternativaSelecionada &&
      alternativaSelecionada.textContent === perguntas[perguntaAtual].correta
    ) {
      acertos++;
    } else {
      perguntasErradas.push(perguntaAtual);
    }

    perguntaAtual++;

    if (perguntaAtual >= perguntas.length) {
      console.log("entrou aquiiiiiiii");
      popUpPerguntas.close();
      popUpRespostas.showModal();
      acertosLabel.innerHTML = acertos + "/" + perguntas.length;
      
      mostrarErros();
      return;
    }
    atualizarQuiz();
  });

  document.querySelector("#last-quiz").addEventListener("click", () => {
    if (perguntaAtual > 0) {
      perguntaAtual--;
      atualizarQuiz();
    }
    popUpPerguntas.close();
  });

  document
    .querySelector(".quiz-alternativas")
    .addEventListener("click", (e) => {
      if (e.target.classList.contains("alternativa")) {
        let alternativaClicada = e.target;
        if (
          ultimaAlternativaClicada &&
          ultimaAlternativaClicada !== alternativaClicada
        ) {
          ultimaAlternativaClicada.classList.remove("clicado");
        }
        alternativaClicada.classList.add("clicado");
        ultimaAlternativaClicada = alternativaClicada;
        alternativaSelecionada = alternativaClicada;
      }
      e.stopPropagation();
    });

  function mostrarErros() {
    errosContainer.innerHTML = "";
    if (perguntasErradas.length > 0) {
      errosContainer.innerHTML = `<strong>Você errou:</strong>`;
      perguntasErradas.forEach((pergunta, index) => {
        const erroDiv = document.createElement("div");
        erroDiv.innerHTML = `
              <p>Pergunta ${perguntasErradas[index] + 1}</p>`;
        errosContainer.appendChild(erroDiv);
      });
    } else {
      errosContainer.innerHTML =
        "<p>Parabéns! Você acertou todas as perguntas!</p>";
    }
  }

  atualizarQuiz();

  document.querySelector(".fechar").addEventListener("click", (e) => {
    popUpRespostas.close();
  });
});



  

