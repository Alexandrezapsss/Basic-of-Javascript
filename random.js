/*
    lottery winner
this code is in test for choice a winner and used a faction "randon".
*/
let numberLuck= Number(prompt('Escolha um número de 0 a 10 para ser sorteado'));
function getNumberWinner(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let numberGain = getNumberWinner(0, 10);
if(numberLuck === numberGain){
    console.log('Parabens você foi o ganhador');
    console.log(`Seu número ${numberLuck} e número sorteado ${numberGain}`);
}else{
    console.log('Infelizmente não foi desta vez porem sempre tem o próximo');
    console.log(`Seu número ${numberLuck} e número sorteado ${numberGain}`);
}