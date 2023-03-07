const botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
const botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
const soma = document.getElementById('soma') as HTMLInputElement;
const campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = '0';

function somarAoSaldo(soma: string) {
    campoSaldo.innerHTML = (parseFloat(campoSaldo.innerHTML) + parseFloat(soma)).toFixed(2);
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
    soma.value = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
