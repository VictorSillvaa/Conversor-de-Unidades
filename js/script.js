const botao  = document.querySelector("#btn-converter");

const inputValor = document.querySelector("#valor");
const selecaoUnidade = document.querySelector("#unidade");

const displayResultado = document.querySelector("#resultado p");

botao.addEventListener("click", () => {

    const valorEmMetros = Number(inputValor.value);

    const unidadeDestino = selecaoUnidade.value;

     let resultadoFinal = 0;

     if (unidadeDestino === "km") {
        resultadoFinal = valorEmMetros / 1000;
     } else if (unidadeDestino === "cm") {
        resultadoFinal = valorEmMetros * 1000;
     } else if (unidadeDestino === "mm") {
        resultadoFinal = valorEmMetros * 1000;
     }

     displayResultado.innerText = `Resultado: ${resultadoFinal} ${unidadeDestino}`;
});