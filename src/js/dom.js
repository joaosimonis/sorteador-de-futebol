export const dom = {
  goleiroInput: document.querySelector('#goleiro'),
  jogadorInput: document.querySelector('#jogador'),
  btnAdicionarGoleiro: document.querySelector('#btnAdicionarGoleiro'),
  btnAdicionarJogador: document.querySelector('#btnAdicionarJogador'),
  listaCompleta: document.querySelector('#listaCompleta'),
  btnSortearTimes: document.querySelector('#sortearTimes'),
  btnLimparTela: document.querySelector('#limparTela'),
  btnVoltarInicio: document.querySelector('#voltarInicio'),
  inputsSection: document.querySelector('.inputs'),
  resultadosSection: document.querySelector('.resultados'),
  timeAul: document.querySelector('#timeA ul'),
  timeBul: document.querySelector('#timeB ul'),

  atualizarLista(state) {
    if (state.jogadoresTotais.length > 0) {
      this.listaCompleta.innerHTML = '<strong>Lista de jogadores:</strong><ul>' +
        state.jogadoresTotais.map((nome, index) =>
          `<li>${nome} <button class="btnRemover" data-index="${index}">Remover</button></li>`
        ).join('') + '</ul>';

      this.btnSortearTimes.style.display = 'inline-block';
      this.btnLimparTela.style.display = 'inline-block';
    } else {
      this.listaCompleta.innerHTML = '';
      this.btnSortearTimes.style.display = 'none';
      this.btnLimparTela.style.display = 'none';
    }
  },

  esconderInputs() {
    this.inputsSection.style.display = 'none';
    this.listaCompleta.style.display = 'none';
    this.btnAdicionarGoleiro.style.display = 'none';
    this.btnAdicionarJogador.style.display = 'none';
    this.btnSortearTimes.style.display = 'none';
    this.btnLimparTela.style.display = 'none';
  },

  mostrarInputs() {
    this.inputsSection.style.display = 'block';
    this.listaCompleta.style.display = 'block';
    this.btnAdicionarGoleiro.style.display = 'inline-block';
    this.btnAdicionarJogador.style.display = 'inline-block';
  },

  mostrarResultados() {
    this.resultadosSection.style.display = 'flex';
  },

  esconderResultados() {
    this.resultadosSection.style.display = 'none';
  },

  atualizarResultados(timeA, timeB) {
    this.timeAul.innerHTML = timeA.map(jogador => `<li>${jogador}</li>`).join('');
    this.timeBul.innerHTML = timeB.map(jogador => `<li>${jogador}</li>`).join('');
  }
};