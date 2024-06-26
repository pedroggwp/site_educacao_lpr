const modal = document.getElementById("modal");
const bt_submit = document.getElementById("submit");
const input = document.getElementById("input");

bt_submit.addEventListener("click", async function (event) {
  event.preventDefault(); //Previnindo que a pagina não recarregue ao enviar formulario
  const codigo = document.getElementById("input").value;
  let validador = codigo.split("(")[1].split(")")[0];
  if (validador.startsWith('"')) {
    validador = validador.replace('"', "");
    validador = validador.replace('"', "");
  } else {
    validador = validador.replace("'", "");
    validador = validador.replace("'", "");
  }
  console.log(validador);
  try {
    //Indicando o caminho até o script python, /execute é o caminho q passei no script
    const requisicao = await fetch(
      "https://flask-api-dad.onrender.com/execute",
      {
        //Enviando requisição para enviar a mensagem
        method: "POST",
        headers: {
          //Indicando que a solicitação é um json
          "Content-Type": "application/json",
        },
        //Adicionando um objeto do codigo no json
        body: JSON.stringify({ codigo: codigo }),
      }
    );
    //Pegando o resultado da requisição
    const resultado = await requisicao.json();
    let resultadoValida = resultado.output.replace(validador, "");
    console.log("resultado.output" + resultado.output);
    //Coloquei o resultado previsto como "hello world" de exemplo
    if (
      resultadoValida.trim().toLowerCase() === "analista de dados" &&
      input.value.toLowerCase().includes("input")
    ) {
      modal_certo.showModal();
      console.log("caiu no modal certo");
    } else {
      modal_errado.showModal();
      console.log("caiu no modal errado");
    }
  } catch (error) {
    console.log("error message" + error.message);
    modal_errado.showModal();
  }
});
