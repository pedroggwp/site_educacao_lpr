const modal_errado = document.getElementById("modal_erro");
const modal_certo = document.getElementById("modal_certo");
const bt_continuar = document.getElementsByClassName("bt_continuar");

for (let i = 0; i < bt_continuar.length; i++) {
  bt_continuar[i].addEventListener("click", fechar_modal());
}

function fechar_modal() {
  modal_certo.close();
  modal_errado.close();
}
