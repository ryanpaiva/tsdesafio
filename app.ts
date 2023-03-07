let button = document.getElementById('button') as HTMLButtonElement;
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function somarNumeros(numero1: number | string, numero2: number | string): number {
  if (typeof numero1 === 'number' && typeof numero2 === 'number') {
    return numero1 + numero2;
  } else {
    return Number(numero1) + Number(numero2);
  }
}

button.addEventListener('click', () => {
  console.log(somarNumeros(Number(input1.value), Number(input2.value)));
});