import { AbrigoAnimais } from "./abrigo-animais.js";

const abrigo = new AbrigoAnimais();

const resultado = abrigo.encontraPessoas(
    'RATO,BOLA',
     'RATO,NOVELO',
      'Rex,Fofo'
    );

console.log(resultado);
