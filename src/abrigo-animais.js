class AbrigoAnimais {
  constructor() {
    this.ANIMAIS = {
      Rex:  { especie: 'cao',   brinquedos: ['RATO', 'BOLA'] },
      Mimi: { especie: 'gato',  brinquedos: ['BOLA', 'LASER'] },
      Fofo: { especie: 'gato',  brinquedos: ['BOLA', 'RATO', 'LASER'] },
      Zero: { especie: 'gato',  brinquedos: ['RATO', 'BOLA'] },
      Bola: { especie: 'cao',   brinquedos: ['CAIXA', 'NOVELO'] },
      Bebe: { especie: 'cao',   brinquedos: ['LASER', 'RATO', 'BOLA'] },
      Loco: { especie: 'jabuti',brinquedos: ['SKATE', 'RATO'] }
    };

    this.BRINQUEDOS_VALIDOS = new Set(
      Object.values(this.ANIMAIS).flatMap(a => a.brinquedos)
    );
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const parseLista = (s) =>
      (s || '').split(',').map(x => x.trim()).filter(x => x !== '');

    const temDuplicado = (arr) => new Set(arr).size !== arr.length;

    const isSubsequence = (pattern, seq) => {
      let i = 0;
      for (const item of seq) {
        if (item === pattern[i]) i++;
        if (i === pattern.length) return true;
      }
      return pattern.length === 0 ? true : false;
    };

    const hasAllSet = (pattern, seq) => {
      const s = new Set(seq);
      return pattern.every(p => s.has(p));
    };

    const p1 = parseLista(brinquedosPessoa1);
    const p2 = parseLista(brinquedosPessoa2);
    const animaisOrdem = parseLista(ordemAnimais);

    if (temDuplicado(p1) || temDuplicado(p2)) {
      return { erro: 'Brinquedo inválido' };
    }
    for (const b of [...p1, ...p2]) {
      if (!this.BRINQUEDOS_VALIDOS.has(b)) {
        return { erro: 'Brinquedo inválido' };
      }
    }
    if (temDuplicado(animaisOrdem)) {
      return { erro: 'Animal inválido' };
    }
    for (const a of animaisOrdem) {
      if (!this.ANIMAIS[a]) {
        return { erro: 'Animal inválido' };
      }
    }

    let adotadosP1 = 0;
    let adotadosP2 = 0;
    const atribuicoes = {};

    for (const nomeAnimal of animaisOrdem) {
      const info = this.ANIMAIS[nomeAnimal];
      const fav = info.brinquedos;

      let p1Qualifica = false;
      let p2Qualifica = false;

      if (nomeAnimal === 'Loco') {
        p1Qualifica = hasAllSet(fav, p1) && adotadosP1 > 0;
        p2Qualifica = hasAllSet(fav, p2) && adotadosP2 > 0;
      } else {
        p1Qualifica = isSubsequence(fav, p1);
        p2Qualifica = isSubsequence(fav, p2);
      }

      if (adotadosP1 >= 3) p1Qualifica = false;
      if (adotadosP2 >= 3) p2Qualifica = false;

      let dono = 'abrigo';
      if (p1Qualifica && !p2Qualifica) {
        dono = 'pessoa 1';
        adotadosP1++;
      } else if (!p1Qualifica && p2Qualifica) {
        dono = 'pessoa 2';
        adotadosP2++;
      } else {
        dono = 'abrigo';
      }

      atribuicoes[nomeAnimal] = dono;
    }

    const lista = Object.keys(atribuicoes)
      .sort((a, b) => a.localeCompare(b))
      .map(n => `${n} - ${atribuicoes[n]}`);

    return { lista };
  }
}

export { AbrigoAnimais };
