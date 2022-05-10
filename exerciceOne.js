//exercicio - Escreva uma função que receba 2 numero e retorne o maior entre eles.
let numberOne= Number(prompt('Digite um número'));
let numberTwo= Number(prompt('Digite o segundo número'));

function Maior(x, y){
    if(x > y){
        console.log(`${x} é maior que ${y}`);
    }
    else if(y > x){
        console.log(`${y} é maior que ${x}`)
    }
    else{
        console.log("Ambos os valores são iguais");
    }
}
let result= Maior(numberOne, numberTwo);

console.log(result);