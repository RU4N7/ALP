let precoCusto = Number(prompt("Digite o preço de custo do produto: "));
let percentual = Number(prompt("Digite o percentual de acréscimo: "));
let precoVenda = precoCusto * (1 + percentual / 100);

console.log(`O preço de venda é de R$ ${precoVenda.toFixed(2)}`);
