var answer = []; // resposta certa 1
var correctAnswer = [0, 2, 2, 3];

var name = prompt("Coloque seu nome");

//imprimir no html o nome
document.getElementById("name").innerHTML = name;

var choice = prompt("Coloque o número correspondente à sua resposta: \n Quer iniciar o jogo? \n 1. Sim! \n 2. Não :( ");

if (choice == 2){
    document.getElementById("bye").style.display = "block";
    document.getElementById("welcome").style.display = "none";
}

if (choice == 1){

    answer[1] = prompt("1 Coloque o número correspondente à sua resposta: \n Qual dessas cores não é primária? \n 1.vermelho \n 2. laranja \n 3. azul");
    answer[2] = prompt("2 Coloque o número correspondente à sua resposta: \n Qual a cor do Laboratória? \n 1. roxo \n 2. amarelo \n 3. azul");      
    answer[3] = prompt("3 Coloque o número correspondente à sua resposta: \n Qual a cor da mistura entre vermelho e azul? \n 1. verde \n 2. marrom \n 3. roxo");

}

for(var i=1; i<=3; i++){
    if(answer[i] == correctAnswer[i]){
        document.getElementById("correctAnswer"+i).style.display = "block";
    }else {
        document.getElementById("wrongAnswer"+i).style.display = "block";
    }
}
