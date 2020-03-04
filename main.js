var questionOne; // resposta certa 2
var questionTwo; // resposta certa 2 
var questionThree; // resposta certa 3

var name = prompt("Coloque seu nome");
var hi = ("Olá," + name);
var bye = ("OK, Tchau tchau!")


var choice = prompt("Coloque o número correspondente à sua resposta: \n Quer iniciar o jogo? \n 1. Sim! \n 2. Não :( ");
//criar condição caso a pessoa não queira jogar dps ela para prossguir
if (choice == 2){
    document.getElementById("bye").innerHTML = bye;

} else if (choice == 1){
    questionOne = prompt("1 Coloque o número correspondente à sua resposta: \n Qual dessas cores não é primária? \n 1.vermelho \n 2. laranja \n 3. azul");

    if ((questionOne != 1) && (questionOne != 2) && (questionOne != 3)) {
        alert("Insira resposta válida1");
        questionOne = prompt("Coloque o número correspondente à sua resposta: \n Qual dessas cores não é primária? \n 1.vermelho \n 2. laranja \n 3. azul");
    
    } else {
        questionTwo = prompt("2 Coloque o número correspondente à sua resposta: \n Qual a cor do Laboratória? \n 1. roxo \n 2. amarelo \n 3. azul");      
    
    } 
    if (questionTwo != 1 && questionTwo != 2 && questionTwo != 3) { 
        alert("Insira resposta válida2");
        questionTwo = prompt("Coloque o número correspondente à sua resposta: \n Qual a cor do Laboratória? \n 1. roxo \n 2. amarelo \n 3. azul");
    
    } else{
        questionThree = prompt("Coloque o número correspondente à sua resposta: \n Qual a cor da mistura entre vermelho e azul? \n 1. verde \n 2. marrom \n 3. roxo");
        
    } 
    if(questionThree != 1 && questionThree != 2 && questionThree != 3){
        alert("Insira resposta válida3");
        questionThree = prompt("Coloque o número correspondente à sua resposta: \n Qual a cor da mistura entre vermelho e azul? \n 1. verde \n 2. marrom \n 3. roxo");
    }
    
}else {
    alert("Insira resposta válida4");

}

//imprimir no html
document.getElementById("nameid").innerHTML = hi;