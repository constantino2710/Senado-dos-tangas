function buscarPacientes() {
  const section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Digite o nome do pet.</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let nomePaciente = "";
  let especiePaciente = "";

  for (const paciente of pacientes) {
    nomePaciente = paciente.nome.toLowerCase();
    especiePaciente = paciente.especie.toLowerCase();

    if (nomePaciente.includes(campoPesquisa) || especiePaciente.includes(campoPesquisa)) {
      resultados += `
      <div class="pet-card">
        <div><img src="${paciente.imagem}" alt="Imagem de ${paciente.nome}"></div>
        <div class="pet-info">
          <div class="header"><h2>${paciente.nome}</h2></div>
          <p class="condition">Idade: <b>${paciente.idade}</b> anos</p>
          <p class="condition">Espécie: <b>${paciente.especie}</b></p>
        </div>
      </div>
      `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  section.innerHTML = resultados;
}
