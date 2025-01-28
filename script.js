function calcular() {

//coletando os valores inseridos pelo usuário
    const lucro = parseFloat(document.getElementById("lucro") .value);
    const horasTrabalhadas = parseFloat(document.getElementById("horas") .value);
    const custoMaterial = parseFloat(document.getElementById("material") .value);
    const custoFixo = parseFloat(document.getElementById("custoFixo") .value);

// calculos
    const valorHoraTrabalhada = lucro/220;
    const precoCustoPeca = valorHoraTrabalhada + custoMaterial + custoFixo;
    const valorPrecoFinal = precoCustoPeca * 3;

//resultados
    document.getElementById("resultadoValorHora"). innerHTML = `Valor do tempo trabalhado: R$ ${valorHoraTrabalhada.toFixed(2)}`;
    document.getElementById("resultadoPrecoCusto").innerHTML = `Custo da peça: R$ ${precoCustoPeca.toFixed(2)}`;
    document.getElementById("resultadoPrecoFinal").innerHTML = `Preço final da peça: R$  ${valorPrecoFinal.toFixed(2)}`;
    
}