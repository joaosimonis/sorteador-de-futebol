import { state } from './state.js';
import { dom } from './dom.js';
import { logic } from './logic.js';

export const events = {
  init() {
    dom.btnAdicionarGoleiro.addEventListener('click', this.adicionarGoleiro);
    dom.btnAdicionarJogador.addEventListener('click', this.adicionarJogador);
    dom.listaCompleta.addEventListener('click', this.removerJogador);
    dom.btnSortearTimes.addEventListener('click', this.sortear);
    dom.btnLimparTela.addEventListener('click', this.limparTela);
    dom.btnVoltarInicio.addEventListener('click', this.voltarInicio);

    dom.goleiroInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.adicionarGoleiro();
      }
    });

    dom.jogadorInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.adicionarJogador();
      }
    });
  },

  adicionarGoleiro() {
    const nome = dom.goleiroInput.value.trim();

    if (!nome) return;

    if (nome.length > 15) {
      alert("O nome do goleiro não pode ter mais de 15 caracteres!");
      return;
    }

    const goleiroExistente = state.goleiros.find(goleiro => 
      goleiro.replace(' 🧤', '').toLowerCase() === nome.toLowerCase()
    );
  
    if (goleiroExistente) {
      alert("Já existe um goleiro com esse nome!");
      return;
    }

    if (state.goleiros.length >= 2) {
      alert("Não é possível adicionar mais de 3 goleiros!");
      return;
    }

    state.goleiros.push(`${nome} 🧤`);
    dom.goleiroInput.value = '';
    dom.goleiroInput.focus();
    dom.atualizarLista(state);
  },

  adicionarJogador() {
    const nome = dom.jogadorInput.value.trim();
    if (nome) {
      const jogadorExistente = state.jogadoresDeLinha.find(jogador => 
        jogador.toLowerCase() === nome.toLowerCase()
      );

    
    if (jogadorExistente) {
        alert("Já existe um jogador com esse nome!");
        return;
      }
    
    if (state.jogadoresDeLinha.length >= 20) {
      alert("Não é possível adicionar mais de 20 jogadores!");
      return;
    }

      state.jogadoresDeLinha.push(nome);
      dom.jogadorInput.value = '';
      dom.jogadorInput.focus();
      dom.atualizarLista(state);
    }
  },

  removerJogador(e) {
    if (e.target.classList.contains('btnRemover')) {
      const index = parseInt(e.target.getAttribute('data-index'));
      if (index < state.goleiros.length) {
        state.goleiros.splice(index, 1);
      } else {
        state.jogadoresDeLinha.splice(index - state.goleiros.length, 1);
      }
      dom.atualizarLista(state);
    }
  },

  sortear() {
    if (state.jogadoresTotais.length < 10) {
      alert(`É necessário ter pelo menos 10 jogadores para sortear os times!\nAtualmente há ${state.jogadoresTotais.length} jogadores.`);
      return; 
    }

    dom.esconderInputs();
    dom.mostrarResultados();
    const { timeA, timeB } = logic.sortearTimes(state);
    dom.atualizarResultados(timeA, timeB);
    dom.btnVoltarInicio.style.display = 'inline-block';
  },

  limparTela() {
    state.resetar();
    dom.atualizarLista(state);
    dom.timeAul.innerHTML = '';
    dom.timeBul.innerHTML = '';
    dom.esconderResultados();
    dom.mostrarInputs();
  },

  voltarInicio() {
    state.resetar();
    dom.atualizarLista(state);
    dom.timeAul.innerHTML = '';
    dom.timeBul.innerHTML = '';
    dom.mostrarInputs();
    dom.esconderResultados();
    dom.btnVoltarInicio.style.display = 'none';
    dom.btnSortearTimes.style.display = 'none';
  }
};