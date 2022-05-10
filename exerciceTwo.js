//Escreva uma função que receba um número e retorne:
//Número divisivel por 3= Fizz
//Número divisivel por 5= Buzz
//número divisivel por 3 e 5= FizzBuzz
//número não divisivel retorne ele mesmo.
//Digite numeros de 0 a 100

function Verification(x){
    if (typeof x !== 'number') return x;
    if (x % 3 === 0) return 'Fizz';
    if (x % 5 === 0) return 'Buzz';
    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
    return x;
}
for(i= 0; i <= 100; i++){
    console.log(i, Verification(i));
}