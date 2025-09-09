
# AbrigoAnimais

## Descrição

AbrigoAnimais é um sistema em JavaScript que simula a lógica de adoção de animais em um abrigo, considerando a ordem dos animais e os brinquedos preferidos de cada um. O projeto permite identificar qual pessoa pode adotar determinado animal com base nos brinquedos que possuem.

---

## Estrutura do Projeto

```
.
├── src/
│   ├── abrigo-animais.js   # Classe principal com a lógica de adoção
│   └── index.js            # Exemplo de execução da classe
├── tests/
│   └── abrigo-animais.test.js  # Testes automatizados com Jest
├── package.json
└── README.md
```

---

## Instalação

1. Clone o repositório:

```
git clone <https://github.com/theuslinor/desafio-theuslinor-2025.git>
```

2. Instale as dependências:

```
npm install
```

---

## Como Rodar

Exemplo de execução direta:

```
node src/index.js
```

Executar testes automatizados:

```
npm test
```

Os testes são feitos com Jest (https://jestjs.io/).

---

## Exemplo de Uso

```javascript
import { AbrigoAnimais } from "./abrigo-animais.js";
const abrigo = new AbrigoAnimais();
const resultado = abrigo.encontraPessoas(
    'RATO,BOLA',
     'RATO,NOVELO',
      'Rex,Fofo'
    );

console.log(resultado);
// Saída esperada: [ 'Fofo - abrigo', 'Rex - pessoa 1' ]
```

---

## Observações

- Cada pessoa pode adotar no máximo 3 animais.
- Animais só podem ser adotados por pessoas que tenham os brinquedos preferidos do animal.
- Animais que não têm pessoa qualificada permanecem no abrigo.
- Loco, o jabuti, exige que a pessoa já tenha adotado outro animal para poder adotá-lo.
