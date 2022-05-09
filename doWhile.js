//Exercice with Do While in Javascript
let i = 1;
let vezes = Number(prompt('Quantas vezes deseja que seja exibida?'));
do{
    let tabuada= Number(prompt('Quala atabuada a ser exibida?'));
    for(n = 0; n <= 10; n++){
        console.log(`${tabuada} * ${n}= ${tabuada * n}`);
    }
    i++
}while(i <= vezes);