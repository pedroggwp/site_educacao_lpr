const otherOperators = document.getElementsByClassName("others_operators")[0];
const knowMore = document.getElementById("saiba_mais");

knowMore.addEventListener("click", () => {
    if (otherOperators.classList.contains('invisible')) {
        otherOperators.classList.remove('invisible');
    } else {
        otherOperators.classList.add('invisible');
    }
});

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
