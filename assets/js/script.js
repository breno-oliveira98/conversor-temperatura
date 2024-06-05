


// Criar função para converter temperatura 
function converterTemperatura() {
    // criar variaveis e atribuir valor para coletar dados do input e do select no documet
    const inputTemperatura = document.getElementById('inputTemperatura').value;
    const selectUnidade = document.getElementById('selectUnidade').value;
    const selectUnidade2 = document.getElementById('selectUnidade2').value;
    const resultado = document.getElementById('resultado');

    let temperatura = parseFloat(inputTemperatura);
    let unidade = selectUnidade;
    let unidade2 = selectUnidade2;

    let convertendoTemperatura;
    let mensagem = '';

    if (unidade === 'celsius' && unidade2 === 'fahrenheit') {
        convertendoTemperatura = (temperatura * (9 / 5)) + 32;
        mensagem = `${temperatura}°C Celsius é igual a ${convertendoTemperatura.toFixed(2)}°F Fahrenheit.`;
    } else if (unidade === 'fahrenheit' && unidade2 === 'celsius') {
        convertendoTemperatura = (temperatura - 32) * (5 / 9);
        mensagem = `${temperatura}°F Fahrenheit é igual a ${convertendoTemperatura.toFixed(2)}°C Celsius.`;
    } else {
        convertendoTemperatura = temperatura;
        mensagem = `A temperatura permanece a mesma: ${convertendoTemperatura.toFixed(2)}°.`;
    }
    resultado.textContent = mensagem;
}
//função inverter select
function inverterSelect() {
    const selectUnidade = document.getElementById('selectUnidade')
    const selectUnidade2 = document.getElementById('selectUnidade2')

    const temp = selectUnidade.value;

    selectUnidade.value = selectUnidade2.value;
    selectUnidade2.value = temp;

}
//função limpar campos
function limparCampos() {
    document.getElementById('inputTemperatura').value = '';
    document.getElementById('selectUnidade').value = 'celsius';
    document.getElementById('selectUnidade2').value = 'fahrenheit';
    document.getElementById('resultado').textContent = '';
}