function calcularCusto() {
  const idade = parseFloat(document.getElementById("idade").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(idade) || isNaN(peso) || isNaN(altura)) {
    alert("Por favor, insira valores válidos para idade, peso e altura.");
    return;
  }

  const imc = peso / (altura / 100) ** 2;

  const precoA_Basico = 100 + idade * 10 * (imc / 10);
  const precoA_Standard = (150 + idade * 15) * (imc / 10);
  const precoA_Premium = (200 - imc * 10 + idade * 20) * (imc / 10);

  let fatorComorbidade = 0;

  if (imc < 18.5) {
    fatorComorbidade = 10;
  } else if (imc < 25) {
    fatorComorbidade = 1;
  } else if (imc < 30) {
    fatorComorbidade = 6;
  } else if (imc < 35) {
    fatorComorbidade = 10;
  } else if (imc < 40) {
    fatorComorbidade = 20;
  } else {
    fatorComorbidade = 30;
  }

  const precoB_Basico = 100 + fatorComorbidade * 10 * (imc / 10);
  const precoB_Standard = (150 + fatorComorbidade * 15) * (imc / 10);
  const precoB_Premium = (200 - imc * 10 + fatorComorbidade * 20) * (imc / 10);

  exibirTabelaPlanos(
    precoA_Basico,
    precoB_Basico,
    precoA_Standard,
    precoB_Standard,
    precoA_Premium,
    precoB_Premium
  );
}

function exibirTabelaPlanos(
  precoA_Basico,
  precoB_Basico,
  precoA_Standard,
  precoB_Standard,
  precoA_Premium,
  precoB_Premium
) {
  const tabela = document.createElement("table");
  tabela.innerHTML = `
      <tr>
          <th>Plano</th>
          <th>Operadora A</th>
          <th>Operadora B</th>
      </tr>
      <tr>
          <td>Básico</td>
          <td>R$ ${precoA_Basico.toFixed(2)}</td>
          <td>R$ ${precoB_Basico.toFixed(2)}</td>
      </tr>
      <tr>
          <td>Padrão</td>
          <td>R$ ${precoA_Standard.toFixed(2)}</td>
          <td>R$ ${precoB_Standard.toFixed(2)}</td>
      </tr>
      <tr>
          <td>Premium</td>
          <td>R$ ${precoA_Premium.toFixed(2)}</td>
          <td>R$ ${precoB_Premium.toFixed(2)}</td>
      </tr>
  `;

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = ""; // Limpa o conteúdo anterior
  resultadoDiv.appendChild(tabela);
}
function exibirTabelaPlanos(
  precoA_Basico,
  precoB_Basico,
  precoA_Standard,
  precoB_Standard,
  precoA_Premium,
  precoB_Premium
) {
  const tabela = document.createElement("table");
  tabela.innerHTML = `
      <tr>
          <th>Plano</th>
          <th>Operadora A</th>
          <th>Operadora B</th>
      </tr>
      <tr>
          <td>Básico</td>
          <td>R$ ${precoA_Basico.toFixed(2)}</td>
          <td>R$ ${precoB_Basico.toFixed(2)}</td>
      </tr>
      <tr>
          <td>Padrão</td>
          <td>R$ ${precoA_Standard.toFixed(2)}</td>
          <td>R$ ${precoB_Standard.toFixed(2)}</td>
      </tr>
      <tr>
          <td>Premium</td>
          <td>R$ ${precoA_Premium.toFixed(2)}</td>
          <td>R$ ${precoB_Premium.toFixed(2)}</td>
      </tr>
  `;

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = ""; // Limpa o conteúdo anterior
  resultadoDiv.appendChild(tabela);

  // Adiciona espaçamento entre as células da tabela
  const celulas = resultadoDiv.querySelectorAll("td, th");
  celulas.forEach((celula) => {
    celula.style.padding = "8px";
    celula.style.textAlign = "center";
  });
}
