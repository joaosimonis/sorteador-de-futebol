export const state = {
  goleiros: [],
  jogadoresDeLinha: [],

  resetar() {
    this.goleiros = [];
    this.jogadoresDeLinha = [];
  },

  get jogadoresTotais() {
    return [...this.goleiros, ...this.jogadoresDeLinha];
  }
};