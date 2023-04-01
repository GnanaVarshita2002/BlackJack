let cards=[];
let sum = 0;
let hasBlackJack= false;
let isAlive = false;


let messageEl= document.getElementById("message-el");
//let sumEl=document.getElementById("sum-el");
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.getElementById("cards-el");
let message=" ";

let player={
     name:"Per",
     chips: 145,
}


let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+": $"+player.chips;

function startGame(){
    let firstCard= getRandomCard();
    let secondCard = getRandomCard();
    cards=[firstCard,secondCard]; //array -ordered list of items
    sum=firstCard+secondCard;
    isAlive=true;
    renderGame();
}
function renderGame(){
    cardsEl.textContent="Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" ";
    }
    sumEl.textContent="Sum: "+ sum;
    if(sum<=20){
        message="Do u want to pick a card";
    }
    
    else if(sum===21){
        message="You have won the BlackJack";
        hasBlackJack =true;
    }
    
    else{
        message="You are no more part of the game";
        isAlive = false;
    }

    messageEl.textContent=message;
    
}

function newCard(){
    if(isAlive===true&&hasBlackJack===false){
        let card=getRandomCard(); 
        sum+=card;
        cards.push(card);
        renderGame();
    }
    console.log("New Card");
    
    //push the new card to cards array
    
}
/*for(let i=0;i<cards.length;i++){
    console.log(cards[i]);
}
*/

function getRandomCard(){
    let num= Math.random()*14;
    let floornum=Math.floor(num)
    if (floornum>10){
        return 10;
    }
    else if(floornum==1){
        return 11;
    }
    else{
        return floornum;
    }
    
}

console.log(hasBlackJack);
console.log(isAlive);