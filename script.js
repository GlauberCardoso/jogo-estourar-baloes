//Primeiro: Criamos uma função que irá adicionar a bola na tela, em uma posição aleatória:
function addBola() {
    //crio elemento
    let bola = document.createElement("bolas");

    let cont = document.querySelectorAll("bolas");
    if(cont.length > 5) {
        alert("VOCÊ PERDEU!!! TENTE OUTRA VEZ!!!");
        bola = 0;
        window.location.href = window.location.href;
    }

    //atribuo o elemento à uma classe
    bola.setAttribute("class", "bola");

    //criar elemento em varias posições da tela no eixo X.
    //Math.random() * 500: Gera numeros aleatórios de 0 à 500 - Decimais.
    //Math.floor: Transforma numeros Decimais em numeros Inteiros - Ignora o que está depois da virgula.
    let posX = Math.floor(Math.random() * 500);

    //criar elemento em varias posições da tela no eixo Y.
    let posY = Math.floor(Math.random() * 400);

    //Outras cores:
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    //Inserir valores na div bola:
    bola.setAttribute("style", "left:"+posX+"px;top:"+posY+"px;background-color:rgb("+red+","+green+","+blue+")");

    //criar a ação de clique:
    bola.setAttribute("onclick", "estourar(this)");

    //Colocar Elemento na Tela:
    //appendChild(): pega o conteúdo que ja está no site e adiciona um elemento novo.
    document.body.appendChild(bola);
}

//Segundo: Criamos uma função que irá estourar a bola, quando clicar sobre ela:
function estourar(elemento){
    //Removemos o elemento da tela:
    document.body.removeChild(elemento);

    //Sistema de Pontos: Quando chegar em 50 Balões Estourados, aparecerá um Alerta de Parabens! Você ganhou!
    let pontuacao = document.getElementById("pontos").innerHTML;
    pontuacao++;
    document.getElementById("pontos").innerHTML = pontuacao;
    if (pontuacao > 49) {
        alert ("PARABÉNS! VOCÊ GANHOU!");
        window.location.href = window.location.href;
    }
}

//O jogo começa assim que a página for carregada:
function iniciar() {
    //Adicionar um time para de tempo em tempo ser executado a função addBola():
    setInterval(addBola, 500); //1000: de 1 em 1 segundo.
}

function parar() {
    window.location.href = window.location.href;
}