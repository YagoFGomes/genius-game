let order = [];
let clickedOrder = [];
let score = 1;

/*
0 - verde 
1 - vermelho 
2 - amarelo 
3 - azul
*/

//instanciando as divs
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

//gerando um numero aleatorio
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(i in order){
        let elementColor = createElementColor(order[i])
        lightColor(elementColor, Number(i) + 1);
    }
}

//acendendo o botao
let lightColor = (element, number) => {
    number = number * 500
    setTimeout(()=>{
        element.classList.add('selected'); 
    }, number - 250 )
    setTimeout(()=>{
        element.classList.remove('selected'); 
    })
}

//checando a ordem pressionada
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}`)
        nextLevel()
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color; 
    createElementColor(color).classList.add("selected")

    setTimeout(()=>{
        createElementColor(color).classList.remove("selected")
        checkOrder();
    }, )

    
}

let createElementColor = (color) => {
    if(color == 0){
        return green;
    }
    else if(color == 1){
        return red;
    }
    else if (color == 2){
        return yellow
    }
    else if(color == 3){
        return blue
    }
}
let nextLevel = () => {
    score++;
    shuffleOrder();
}
let lose = () => {
    alert(`Pontuação ${score}. Você perdeu o jogo...`)
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert(`Bem vindo ao Genius, iniciando novo jogo!`)
    nextLevel();
    score = 1;   
}

green.onclick = ()=> click(0)
red.onclick = ()=> click(1)
yellow.onclick = ()=> click(2)
blue.onclick = ()=> click(3)

playGame();