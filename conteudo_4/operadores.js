const otherOperators = document.getElementsByClassName("others_operators")[0]
const knowMore = document.getElementById("saiba_mais")

knowMore.addEventListener("click", () => {

    if(otherOperators.classList.contains('invisible')) {
        otherOperators.classList.remove('invisible')
    } else {
        otherOperators.classList.add('invisible')
    }
})