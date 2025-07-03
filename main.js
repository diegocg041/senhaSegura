const numero = document.querySelector('paramentro-senha_texto');
let tamanhoSenha = 12
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letetrasMaiusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '123456789';
const botos = document.querySelectorAll('.parametro-senha_botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('forca');
botoes[0].onclick = diminuiTamanho;
botoes [1].onclick = aumentaTamanho;
function diminuiTamanho() {
    if (tamanhoSenha >1){
        tamanhoSenha--;
    }
    numerosenna.textContent = tamanhosenna;
geraSenha();
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
        numeroSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}