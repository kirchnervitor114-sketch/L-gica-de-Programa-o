// 1.ARRAYS

// 1.1 Array Simples
const frutas = ["maçã", "banana", "laranja"];
// 1.2 FIFO (Fila)
const fila = ["Ana", "Beto", "Caio", "Daiane"];
fila.push("Rogério");
const primeiro = fila.shift(); // Primeiro item 
console.log(primeiro);
// 1.3 FILO (Pilha)
const pilha = ["Corajosas", "Não é como nos filmes", "patinando no amor"];
pilha.push("Fazbear Frights");
const livro = pilha.pop();
console.log(livro);
// 1.4 Buscar se existe 
// const temLaranja = frutas.includes("laranja");]
const temLaranja = frutas.includes("laranja");
const temManga = frutas.includes("manga");
console.log(temLaranja);
console.log(temManga);

// 2. Sets(conjuntos
// 2.1 Adicionando duplicados
const matriculas = new Set([1001, 1002, 1005, 1009, 1002]);
console.log([...matriculas]);
// 2.2 adicionar item
const cores = Set (["Verde", "Azul"]);
cores.add("Vermelho");
    cores.add("Branco");
    cores.add("Preto");
    console.log([...cores]);
        // 2.3 Buscar se existe
        const temVerde = cores.has("Verde");
        const temAmarelo = cores.has("Amarelo");
        console.log(temVerde);
        console.log(temAmarelo);
        // 2.4 Converter array em set
        const convidados = ["Pinheiro", "Maju", "Marcello", "Rebecca", "Gabriela"];
        const convidados_unicos = new Set(convidados);
        console.log([...convidados_unicos]);

        // 3. Map (Mapas)
        // 3.1 Cadastro de Preços
        const produtos = new Map();
        produtos.set("Mouse", 50.00);
        produtos.set("Teclado", 120.00);
        // 3.2 Buscando um valor
      vlorMouse = produtos.get("Mouse");
        console.log(valorMouse);

    