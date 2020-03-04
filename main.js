var questionOne; // resposta certa 1
var questionTwo; // resposta certa 2 
var questionThree; // resposta certa 3
var correctAnswer1 = 2;
var correctAnswer2 = 2;
var correctAnswer3 = 3;
var correctAnswer = {
    1:2,
    2:2,
    3:3
};

function validAnswer(question, answer){
    
    if(question == correctAnswer[answer]){
        document.getElementById("correctAnswer"+answer).style.display = "block";
    }else {
        document.getElementById("wrongAnswer"+answer).style.display = "block";
    }
}


var name = prompt("Coloque seu nome");

//imprimir no html o nome
document.getElementById("name").innerHTML = name;

var choice = prompt("Coloque o número correspondente à sua resposta: \n Quer iniciar o jogo? \n 1. Sim! \n 2. Não :( ");

if (choice == 2){
    document.getElementById("bye").style.display = "block";
    document.getElementById("welcome").style.display = "none";
}

if (choice == 1){

    questionOne = prompt("1 Coloque o número correspondente à sua resposta: \n Qual dessas cores não é primária? \n 1.vermelho \n 2. laranja \n 3. azul");
    questionTwo = prompt("2 Coloque o número correspondente à sua resposta: \n Qual a cor do Laboratória? \n 1. roxo \n 2. amarelo \n 3. azul");      
    questionThree = prompt("3 Coloque o número correspondente à sua resposta: \n Qual a cor da mistura entre vermelho e azul? \n 1. verde \n 2. marrom \n 3. roxo");

}

// Funcao
validAnswer(questionOne, 1);
validAnswer(questionTwo, 2);
validAnswer(questionTwo, 3);

/*
if (questionOne == correctAnswer1) {
    document.getElementById("correctAnswer1").style.display = "block";
} else {
    document.getElementById("wrongAnswer1").style.display = "block";
}

if (questionTwo == correctAnswer2) {
    document.getElementById("correctAnswer2").style.display = "block";
} else {
    document.getElementById("wrongAnswer2").style.display = "block";
}

if (questionThree == correctAnswer3) {
    document.getElementById("correctAnswer3").style.display = "block";
} else {
    document.getElementById("wrongAnswer3").style.display = "block";
}
*/