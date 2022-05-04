//Struct IF and Else - Javascript
// Note Calculator
/*
    Para colocar em pratica essa estutura de controle vou fazer um verificador de notas básico para ver so o aluno passou ou reprovou.
*/
let nomeAluno= prompt("Nome do Aluno: ");
let nota1 = Number(prompt("Informe a primeira nota do aluno: "));
let nota2 = Number(prompt("Informe a primeira nota do aluno: "));
let media= (nota1 + nota2) / 2;

function noteCalculator(nomeAluno, media){
    if(media >= 7){
        console.log(`Parabens ${nomeAluno} você passou com uma ótima média que é ${media}`);
    }
    else if(media >= 5 && media < 7){
        console.log(`${nomeAluno} você passou porem precisa estudar mais sua média é ${media}`);
    }
    else{
        console.log(`${nomeAluno} você reprovou porem precisa estudar mais sua média é ${media}`);
    }
}

noteCalculator(nomeAluno, media);