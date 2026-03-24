

const vendasRaw = [
    { produto: 'Teclado', preco: 150 },
    { produto: 'Mouse', preco: 80 },
    { produto: 'Teclado', preco: 150 }, // Duplicado
    { produto: 'Monitor', preco: 900 },
    { produto: 'Mouse', preco: 80 },    // Duplicado
    { produto: 'Mousepad', preco: 30 }
];

// Criar set com produtos únicos
const array_produtos =
vendasRaw.map(venda => venda.produto);
const set_produtos = new Set(array_produtos);
console.log([...set_produtos]);
// Criar Map produto -> preço
const produtosMap = new Map();
vendasRaw.forEach(venda => {
    produtosMap.set(venda.produto, venda.preco);
});
console.log(produtosMap);

// Crie um map dos produtos e seus preços
// Soma das vendas 
let totalCompra = 0;
for (const item of vendasRaw) {
    totalCompra += item.preco;
}
console.log("total da compra:", totalCompra);
 




