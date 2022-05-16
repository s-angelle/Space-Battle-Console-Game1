
//  ========== CHROME DEVTOOL CONSOLE GAME ========== 




// Creating variables and accessing specific elements located in the html/css 

const btn = document.querySelector('button');
const enemy = document.querySelector(`.enemyStats`);
const player =document.querySelector(`.playerStats`);
const nameBox = document.querySelector(`.nameBox`);
const body = document.querySelector(`body`);
const bodyContainer = document.querySelector(`.bodyContainer`);


// Create SpaceShip class. Each spaceship will have a name, hull (health), firepower, accuracy, as well as dead/alive status. A function is also added to check dead/alive status. 

class SpaceShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.alive = true;
    }
    checkShipStatus() {
        if (this.hull <= 0) {
            return this.alive = false;
            
        }
    }
}

// Functions are added to meet criteria of game:

/* 
The USS Schwarzenegger (referenced in line 62 ) should have the following properties:

hull - 20
firepower -5
accuracy - .7

The alien ships should each have the following ranged properties determined randomly: 

hull - between 3 and 6
firepower - between 2 and 4 
accuracy - between .6 and .8
*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

// Create player's spaceship and add it to the SpaceShip class.

const ussHelloWorld = new SpaceShip('USS Schwarzenegger', 20, 5, .7);

// Create an empty array. Push all alien spaceships into to it with a function titles addShips. This function will automatically add and name 6 alien spaceships. They will be named according to their index.

const spaceFleet = [];

function addShips(i) {

 spaceFleet.push(new SpaceShip(`AlienShip${i}`, getRandomInt(3, 6), getRandomInt(2, 4), getRandomNum(.6, .8)));

}

for (let i = 0; i < 6; i++) {
    addShips(i);
}

// Printing enemy array to console, so player can see the spaceships to battle.

console.log(spaceFleet);

// Assigning a variable to save a function to get rid of spaceships.

let alienAttacker = spaceFleet.pop();


// Creating a function to automatically update the text of the html file to visually reflect the changes of enemy hull, firepower, and accuracy as the battle progresses.

function getEnemyHull() { enemy.innerText = `Hull : ${alienAttacker.hull}\nFirePower : ${alienAttacker.firepower}\nAccuracy : ${alienAttacker.accuracy}\n`};

getEnemyHull();

// Creating a function to automatically update the text of the html file to visually reflect the changes of the player's hull, firepower, and accuracy as the battle progresses.

function getPlayerHull() {player.innerText = `Hull : ${ussHelloWorld.hull}\nFirePower : 5\nAccuracy : .7\n`};

getPlayerHull();

// Creating a function to update the current enemy ship being battled as the battle progresses for better user visualization.

function getEnemyName(){nameBox.innerText = `${alienAttacker.name}`;
}

getEnemyName();


// Creating attack function for player
function ussAttack() {

    if (Math.random() <= ussHelloWorld.accuracy) {
        alienAttacker.hull = alienAttacker.hull - ussHelloWorld.firepower;

        getEnemyHull();

        console.log(`You hit for ${ussHelloWorld.firepower} damage! `);
        
    } else {
        console.log(`You missed! Try again!`);
    }
}

// Creating attack function for enemy (CPU)
function alienAttack() {

    if (Math.random() <= alienAttacker.accuracy) {
        ussHelloWorld.hull = ussHelloWorld.hull - alienAttacker.firepower;

        getPlayerHull();

        console.log(`They hit for ${alienAttacker.firepower} damage! `);

    } else {
        console.log(`They missed! Nice!`);
    }
}

// Creating a function that is evoked when player loses. Prompting them if they want to continue afterwards.
 function lose(){
    prompt('You lost. Try again?');

    body.classList.add("hidden");

    // fail image
    bodyContainer.style.width = "0px";

    console.dir(body);
 }

 
// Creating function for combat between player and CPU.
function combat() {
     if (alienAttacker.alive) {
    
            // If player lost
            if (ussHelloWorld.alive === false){
                lose();
            }
        
        ussAttack();

        alienAttacker.checkShipStatus();

        alienAttack();

        ussHelloWorld.checkShipStatus();
        
    } else {

        if (spaceFleet.length > 0){

        alienAttacker = spaceFleet.pop();

        } else { console.log(`You Win`);
    }

         /*flanking */
        getEnemyHull();

        console.log(`${alienAttacker.name} is Dead! `);

        getEnemyName();

        getThyPrompt();
    }
}

// Prompt and re-prompt on wrong answer entered in input field of the prompt.
function getThyPrompt(){
    if (ussHelloWorld.alive === false){

    lose();

  } else {
        let promptAnswer = prompt(`Continue or Retreat ?`);

        console.log(promptAnswer.toUpperCase());

        if (promptAnswer.toUpperCase() === `CONTINUE`){

     } else if (promptAnswer.toUpperCase() === `RETREAT`){ 
            console.log(`GG no re`);

            lose();

            console.log(`Stop playing, you lost.`);
           
     } else { console.log(`Please type continue or retreat.`);
        getThyPrompt();
    }
  }
}

// Creating event that will start combat upon player clicking button.

btn.addEventListener('click', combat);