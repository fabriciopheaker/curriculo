var motivacional = [
  { autor: "Charles Chaplin",           frase: "A persistência é o caminho do êxito."},
  { autor: "Charlie Brown Jr",           frase: "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação."},
  { autor: "Henry Ford",           frase: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência."},
  { autor: " Walt Disney",           frase: "É divertido fazer o impossível, pois lá a concorrência é menor."},
  { autor: "Mateus 5:4",           frase: "Bem-aventurados os que choram, porque eles serão consolados."},
  { autor: "Salmos 40: 1-2",           frase: "Esperei com paciência pelo Senhor, e ele se inclinou para mim e ouviu o meu clamor Também me tirou duma cova de destruição, dum charco de lodo; pôs os meus pés sobre uma rocha, firmou os meus passos."}
];


var tamanho_colecao = motivacional.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var motivacional_escolhida = motivacional[numero_sorteado];

var autor_curiosidade = motivacional_escolhida.autor;
var frase_curiosidade = motivacional_escolhida.frase;


console.log("Autor: " + autor_curiosidade);
console.log("Frase: " + frase_curiosidade);
