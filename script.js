function calcular(){
    const num1 = parseFloat(document.getElementById('num1').value)

    const num2 = parseFloat(document.getElementById("num2").value)

    const operacao = document.getElementById('operacao').value

    let resultado

    if (isNaN(num1) || isNaN(num2)){
        document.getElementById("resultado").innerText = "Por favor, insira números válidos."
        return
    }
    

    if(operacao === 'adicao'){
        resultado = num1 + num2

    } else if(operacao === 'subtracao'){
        resultado = num1 - num2

    } else if(operacao === 'multiplicacao'){
        resultado = num1 * num2

    } else if(operacao === 'divisao'){

        if (num2 === 0){
            resultado = "Erro: Divisão por zero"

        }else{
        resultado = num1 / num2
        
    }
    }
    document.getElementById('resultado').innerText = resultado
}
  