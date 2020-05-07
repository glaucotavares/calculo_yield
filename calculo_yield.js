function somar() {
    var resposta = window.document.querySelector('div#resposta')
    var num1 = window.document.getElementById('num1')
    var num2 = window.document.getElementById('num2')
    var res = window.document.getElementById('resultado')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var s = (n1 / n2) * 100;
    window.document.getElementById('resultado').value = s.toFixed(2)

        if (num1.value.length == 0 || num2.value.length == 0) {
            window.alert('Por favor, insira um número!')
        
        } else {
        // resposta bom ou ruim      
        if (s < 6) {
        resposta.innerHTML = 'Dividend Yield baixo! \u{1F615}'

        } else if (s < 10) {
        resposta.innerHTML = 'Dividend Yield BOM!!! \u{1F600}'

        } else if (s => 10) {
        resposta.innerHTML = 'Dividend Yield EXCELENTE!!! \u{1F60D} ' 
        }
        }
    }
