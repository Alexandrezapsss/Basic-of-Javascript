let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let numero of lista){
    if(numero === 2){
        console.log('Pulei o número 2');
        continue;
    }
    console.log(numero);
    if(numero === 7){
        console.log('Encontrado o número 7 está saindo...');
        break;
    }
}