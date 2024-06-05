const barraPesquisaInt = document.getElementById("inputInt")
const barraPesquisaFloat = document.getElementById("inputFloat")
const barraPesquisaString = document.getElementById("inputStr")
const barraPesquisaBool = document.getElementById("inputBool")
const erroInt = document.getElementById("erroInt")
const erroFloat = document.getElementById("erroFloat")
const erroStr = document.getElementById("erroStr")
const erroBool = document.getElementById("erroBool")

barraPesquisaInt.addEventListener('keydown', (event)=>{
    if(event.key == "Enter"){
        const valorDigitadoInt = barraPesquisaInt.value
        const nomeVariavelInt = "mes";
        const valoresPossiveisInt = ["1","2","3","4","5","6","7","8","9","10","11","12"]
        const retornoInt = verificarCodigosInt(valorDigitadoInt,nomeVariavelInt,valoresPossiveisInt)
        if(retornoInt == 0){
            if(!erroInt.classList.contains("invisivel")){
                erroInt.classList.add("invisivel")
                barraPesquisaInt.classList.remove("erro")
            }
        }
        else{
            erroInt.classList.remove("invisivel")
            barraPesquisaInt.classList.add("erro")
            if(retornoInt == 1){
                erroInt.textContent = "O valor não é um valor possível para um Mês"
            }
            else if(retornoInt == 2){
                erroInt.textContent = "O nome da varíavel não está como foi pedido"
            }
            else if(retornoInt == 3){
                erroInt.textContent = "Falta o = na declaração da varíavel"
            }
        }
    }
})
barraPesquisaFloat.addEventListener('keydown', (event)=>{
    if(event.key == "Enter"){
        const valorDigitadoFloat = barraPesquisaFloat.value
        const nomeVariavelFloat = "dinheiro";
        const retornoFloat = verificarCodigosFloat(valorDigitadoFloat,nomeVariavelFloat)
        if(retornoFloat == 0){
            if(!erroFloat.classList.contains("invisivel")){
                erroFloat.classList.add("invisivel")
                barraPesquisaFloat.classList.remove("erro")
            }
        }
        else{
            erroFloat.classList.remove("invisivel")
            barraPesquisaFloat.classList.add("erro")
            if(retornoFloat == 1){
                erroFloat.textContent = "O nome da varíavel não está como foi pedido"
            }
            else if(retornoFloat == 2){
                erroFloat.textContent = "Uma varíavel Float tem que ser um número"
            }
            else if(retornoFloat == 3){
                erroFloat.textContent = "Uma varíavel Float tem que conter ponto"
            }
            else if(retornoFloat == 4){
                erroFloat.textContent = "Falta o = na declaração da varíavel"
            }
        }
    }
})
barraPesquisaString.addEventListener('keydown', (event)=>{
    if(event.key == "Enter"){
        const valorDigitadoString = barraPesquisaString.value
        const nomeVariavelString = "nome";
        const retornoStr = verificarCodigosString(valorDigitadoString,nomeVariavelString)
        if(retornoStr == 0){
            if(!erroStr.classList.contains("invisivel")){
                erroStr.classList.add("invisivel")
                barraPesquisaString.classList.remove("erro")
            }
        }
        else{
            barraPesquisaString.classList.add("erro")
            erroStr.classList.remove("invisivel")
            if(retornoStr == 1){
                erroStr.textContent = "As aspas são abertas porém não são fechadas"
            }
            else if(retornoStr == 2){
                erroStr.textContent = "Um conteúdo Str tem que estar entre aspas"
            }
            else if(retornoStr == 3){
                erroStr.textContent = "Falta o = na declaração do varíavel"
            }
            else if(retornoStr == 4){
                erroStr.textContent = "Nome da varíavel não está como foi pedido"
            }
        }
    }
})
barraPesquisaBool.addEventListener('keydown', (event)=>{
    if(event.key == "Enter"){
        const valorDigitadoBool = barraPesquisaBool.value
        const nomeVariavelBool = "feito";
        const valoresPossiveisBool = ["True","False"]
        const retornoBool = verificarCodigosBool(valorDigitadoBool,nomeVariavelBool,valoresPossiveisBool)
        if(retornoBool== 0){
            if(!erroBool.classList.contains("invisivel")){
                erroBool.classList.add("invisivel")
                barraPesquisaBool.classList.remove("erro")
            }
        }
        else{
            barraPesquisaBool.classList.add("erro")
            erroBool.classList.remove("invisivel")
            if(retornoBool == 1){
                erroBool.textContent = "Os valores de um bool podem ser apenas True & False"
            }
            else if(retornoBool == 2){
                erroBool.textContent = "Nome da varíavel não está como foi pedido"
            }
            else if(retornoBool == 3){
                erroBool.textContent = "Falta o = na declaração da varíavel"
            }
        }
    }
})
function verificarCodigosInt(codigoDigitado, nomeVariavel, valoresPossiveis){
    if(codigoDigitado.includes("=")){
        if( codigoDigitado.split("=")[0].trim().toLowerCase() == nomeVariavel ){
            if(valoresPossiveis.includes(codigoDigitado.split("=")[1].trim().toLowerCase())){
                return 0;
            }
            else{
                return 1;
            }
        }
        else {
            return 2;
        }
    }
    else{
        return 3;
    }
}
function verificarCodigosFloat(codigoDigitado, nomeVariavel){
    if(codigoDigitado.includes("=") ){
        if(codigoDigitado.includes(".")){
            let num = Number(codigoDigitado.split("=")[1].trim().toLowerCase())
            if((codigoDigitado.split("=")[1].trim().split(".")[1]).length > 0 && !isNaN(num)){
                if(codigoDigitado.split("=")[0].trim().toLowerCase() == nomeVariavel){
                    return 0;
                }
                else{
                    return 1;
                }
            }
            else{
                return 2;
            }
        }
        else{
            return 3;
        }
    }
    else{
        return 4;
    }
}
function verificarCodigosString(codigoDigitado,nomeVariavel){
    if(codigoDigitado.includes("=")){
        let nomeVariavelUser = codigoDigitado.split("=")[0].trim()
        if(nomeVariavel == nomeVariavelUser){
        }
        else{
            return 4;
        }
        if(codigoDigitado.split("=")[1].trim().includes("'")){
            if(((codigoDigitado.split("=")[1].trim().split("'")).length - 1) % 2 == 0){
                if(codigoDigitado.split("=")[1].trim().startsWith("'") && codigoDigitado.split("=")[1].trim().endsWith("'")){
                    return 0;
                }
                else{
                    return 2;
                }
            }
            else {
                return 1;
            }
        }
        else if(codigoDigitado.split("=")[1].trim().includes('"')){
            if(((codigoDigitado.split("=")[1].trim().split('"')).length - 1) % 2 == 0){
                if(codigoDigitado.split("=")[1].trim().startsWith('"') && codigoDigitado.split("=")[1].trim().endsWith('"')){
                    return 0;
                }
                else{
                    return 2;
                }
            }
            else{
                return 1;
            }
        }
        else {
            return 2;
        }
    }
    else {
        return 3;
    }
}
function verificarCodigosBool(codigoDigitado,nomeVariavel,valoresPossiveis){
    if(codigoDigitado.includes("=")){
        if(codigoDigitado.split("=")[0].trim().toLowerCase() == nomeVariavel){
            if(valoresPossiveis.includes(codigoDigitado.split("=")[1].trim())){
                return 0;
            }
            else{
                return 1;
            }
        }
        else{
            return 2;
        }
    }
    else{
        return 3;
    }
}