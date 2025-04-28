export const logic = {
  sortearTimes(state) {
    const goleiros = [...state.goleiros];
    const outrosJogadores = [...state.jogadoresDeLinha];
    const timeA = [];
    const timeB = [];

    if (goleiros.length === 2) {
      timeA.push(goleiros[0]);
      timeB.push(goleiros[1]);
    } else if (goleiros.length === 1) {
      Math.random() < 0.5 ? timeA.push(goleiros[0]) : timeB.push(goleiros[0]);
    }

    const todosJogadores = [...outrosJogadores];

    while (todosJogadores.length > 0) {
      const randomIndex = Math.floor(Math.random() * todosJogadores.length);
      const jogador = todosJogadores.splice(randomIndex, 1)[0];

      if (timeA.length <= timeB.length) {
        timeA.push(jogador);
      } else {
        timeB.push(jogador);
      }
    }
    return { timeA, timeB };
  }
};