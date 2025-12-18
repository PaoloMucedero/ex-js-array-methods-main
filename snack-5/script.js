const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

const numeriPari = nums.filter(function (numero) {
  return numero % 2 === 0;
});

// Verifica
console.log(numeriPari);
// Risultato: [2, 8, 4, 12]