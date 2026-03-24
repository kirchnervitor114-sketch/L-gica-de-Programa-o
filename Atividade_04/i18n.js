// 1. Lista de Termos (Inglês)
const termosPT =
["Bem-vindo", "Carrinho", "Sair"];

// 2. Lista de Termos (Inglês)
const termosEN = new Map([
    ["Bem-vindo", "Welcomew"],
    ["Carrinho", "Cart"],
    ["Sair", "logout"]
]);
// 2. Lista de termos (Espanhol)
const termosES =new Map([
    ["Bem-vindo", "Bienvenido"]
    ["Carrinho", "Carrito"],
    ["Sair", "Salir"]
]);
// 4. Escolher o idioma
const idioma_selecionado = termosEN;
// 5. Gerar termos traduzidos
const traducao =
termosPT.map(termo => idioma_selecionado.get(termo) || termo);
// 6. Imprimir dados
console.log(traducao[0]);
console.log(traducao[1]);
console.log(traducao[2]);  