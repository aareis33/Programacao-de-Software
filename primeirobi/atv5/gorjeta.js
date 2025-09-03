const valorConta = 100;
const percentualGorjetaPadrao = 15;

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question(
  `Informe a gorjeta em % (Enter para usar ${percentualGorjetaPadrao}%): `,
  (entrada) => {

    const pctDigitado = parseFloat(entrada.replace(",", "."));
    const percentualGorjeta = Number.isFinite(pctDigitado) && pctDigitado >= 0
      ? pctDigitado
      : percentualGorjetaPadrao;

    const valorGorjeta = valorConta * (percentualGorjeta / 100);

    const valorTotal = valorConta + valorGorjeta;

    console.log(
      `Valor da Conta: R$${valorConta.toFixed(2)}, ` +
      `Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, ` +
      `Total a pagar: R$${valorTotal.toFixed(2)}`
    );

    rl.close();
  }
);
