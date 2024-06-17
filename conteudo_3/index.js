const modal = document.getElementById("modal")
const modal_errado = document.getElementById("modal_erro")
const modal_certo = document.getElementById("modal_certo")
const bt_continuar = document.getElementsByClassName("bt_continuar")
const bt_submit = document.getElementById("submit")
const input = document.getElementById("input")


bt_submit.addEventListener("click", async function (event) {
    event.preventDefault(); //Previnindo que a pagina não recarregue ao enviar formulario
    const codigo = document.getElementById("input").value;
    if (document.getElementById("input").textContent.includes("input")){
      
    }
    try {
      //Indicando o caminho até o script python, /execute é o caminho q passei no script
      const requisicao = await fetch("https://flask-api-dad.onrender.com/execute", {
        //Enviando requisição para enviar a mensagem
        method: "POST",
        headers: {
            //Indicando que a solicitação é um json
          "Content-Type": "application/json",
        },
        //Adicionando um objeto do codigo no json
        body: JSON.stringify({ codigo: codigo }),
      });
      //Pegando o resultado da requisição
      const resultado = await requisicao.json();
      console.log("resultado.output"+resultado.output)
      //Coloquei o resultado previsto como "hello world" de exemplo
      if(resultado.output.trim().toLowerCase() === "analista de dados" && input.textContent().toLowerCase().contains("input")){
        modal_certo.showModal();
        console.log("caiu no modal certo");
      }else{
        modal_errado.showModal();
        console.log("caiu no modal errado");
      }

    } catch (error) {
        console.log("error message"+error.message);
        modal_errado.showModal();
    }
  });
  for (let i = 0; i < bt_continuar.length; i++) {
        bt_continuar[i].addEventListener('click', fechar_modal)
    }

    function fechar_modal() {
        modal_certo.close()
        modal_errado.close()
    }