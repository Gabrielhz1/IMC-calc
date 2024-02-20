const buttonCalc = document.getElementById("calc");


function calc() {
    const nome = document.getElementById("name").value
    const altura = document.getElementById("width").value
    const peso = document.getElementById("weight").value
    const result = document.getElementById("result")


    if(nome != "" && altura!="" && peso!="") {
        
        const calcImc = (peso / (altura ** 2)).toFixed(1)

        let classificacao = ""

        if(calcImc < 18.5) {
            classificacao = "Abaixo do peso"
        }
        else if(calcImc < 25) {
            classificacao = "Com peso ideal, Parabéns!!!"
        }
        else if(calcImc < 30) {
            classificacao = "Levemente acima do peso!"
        }
        else if(calcImc <35) {
            classificacao = "com obesidade Grau I"
        }
        else if(calcImc <40) {
            classificacao = "com obesidade Grau II"
        }else{
            classificacao = "Com obesidade Grau III, Cuidado!!!"
        }


        result.textContent = `${nome} seu IMC é ${calcImc} e você está ${classificacao}`
    }else {
        result.textContent = "Por favor preencha os campos!!"
    }

}
buttonCalc.addEventListener("click", calc) ;