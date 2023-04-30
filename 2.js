let valor1 = Number(prompt("digite o 1° valor:   "));
let quant1 = Number(prompt("digite a quantidade°:   "));;
let valor2 = Number(prompt("digite o 2° valor:   "));;
let quant2 = Number(prompt("digite a quantidede do 2°:   "));

let ipi =Number(prompt("digite o ipi:   "));

let total = (valor1 * quant1 + valor2 * quant2) * (ipi / 100 + 1);
    console.log(`O valor total a ser pago é: R$ ${total}`);

