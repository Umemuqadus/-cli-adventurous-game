import inquirer from "inquirer";

let dragonhealth = Math.floor(Math.random() * 100) + 1;
let humanhealth = Math.floor(Math.random() * 100) + 1;
let damage = Math.floor(Math.random() * 20) + 1;

async function startgame() {
    while (dragonhealth > 0 && humanhealth > 0) {
        const action = await inquirer.prompt([{
            name: "action",
            message: "What do you want to do?",
            type: 'list',
            choices: ["Fight", "Run"]
        }]);

        if (action.action === "Fight") {
            console.log('You chose to fight. Good luck!');
            console.log("Your health =", humanhealth);
            console.log("Dragon's health =", dragonhealth);
            console.log("Damage =", damage);
            
            // Calculate damage to dragon
            const dragonDamage = Math.floor(Math.random() * damage) + 1;
            console.log("You hit the dragon with", dragonDamage, "damage!");
            dragonhealth -= dragonDamage;

            // Dragon attacks human
            const humanDamage = Math.floor(Math.random() * damage) + 1;
            console.log("The dragon attacks you with", humanDamage, "damage!");
            humanhealth -= humanDamage;
        } else if (action.action === "Run") {
            console.log('You chose to run. Coward!');
            console.log('You lost the game.');
            break; // End the game if the player chooses to run
        }

        if (dragonhealth <= 0) {
            console.log('You won the game.');
            break; // End the game if the dragon is defeated
        }

        if (humanhealth <= 0) {
            console.log("You lost the game.");
            break; // End the game if the human is defeated
        }
    }
}

startgame();
