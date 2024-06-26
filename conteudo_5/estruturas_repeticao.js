const input = document.getElementById("inputInteracao");
const contadorTexto = document.getElementById("contador");
let rodando = false;

input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    if (rodando) {
      window.alert("O quadrado está mudando de cor ainda");
    } else {
      executarLoop();
    }
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Função assíncrona que executa o loop while com pausas
async function executarLoop() {
  rodando = true;
  let cont = 0;
  const valorWhile = input.value;
  while (valorWhile > cont) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    contadorTexto.style.backgroundColor = `rgb(${r},${g},${b})`;
    cont++;
    contadorTexto.textContent = "Mudança de cor=" + cont;
    await sleep(1500);
  }
  contadorTexto.style.backgroundColor = "#3972A2";
  contadorTexto.textContent = "Mudança de cor=X";
  rodando = false;
}
const btDesafio = document.getElementsByClassName("desafio");

document.querySelector(".desafio").addEventListener("click", () => {
  console.log("clicou");
  const perguntas = [
    {
      code: "#Opção1<br>for fruit in fruits:<br>&emsp;&emsp;print(fruit)<br><br>#Opção2<br>for i in range(len(fruits)):<br>&emsp;&emsp;print(fruits[i])<br><br>#Opção3<br>while fruit in fruits:<br>&emsp;&emsp;print(fruit)<br><br>#Opção4<br>while i < len(fruits):<br>&emsp;&emsp;print(fruits[i])<br>&emsp;&emsp;i += 1",
      pergunta:
        "Qual das opções representa um loop for que percorre uma lista chamada fruits e imprime cada item da lista?",
      alternativas: ["1", "2", "3", "4"],
      correta: "1",
    },
    {
      code: "for i in range(1, 6): <br>&emsp;&emsp;print(i)",
      pergunta: "Como você interrompe um loop for antecipadamente em Python?",
      alternativas: ["stop", "exit", "break", "terminate"],
      correta: "break",
    },
    {
      code: "count = 0 <br>&emsp;&emsp;while count < 3: <br>&emsp;&emsp;print('Hello, world!')<br>&emsp;&emsp;count += 1",
      pergunta: "Qual a saída do código?",
      alternativas: [
        "'Hello, world!' é impresso uma vez.",
        "'Hello, world!' é impresso três vezes.",
        "O código gera um erro.",
        "'Hello, world!'' é impresso indefinidamente.",
      ],
      correta: "'Hello, world!' é impresso três vezes.",
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