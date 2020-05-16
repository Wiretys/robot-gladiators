var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 15;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
  // repeat and execute as long as the enemy robot is alive 
  while(enemyHealth > 0 && playerHealth > 0) {

    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        // if player choses to skip  
        if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm user wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
          }
        }
        // function to generate a random numeric value
        var randomNumber = function(min, max) {
          var value = Math.floor(Math.random() * (max - min + 1) + min);
  
          return value;
        };


    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

      // generate random damage value based on player's attack power
      var damage = randomNumber(playerAttack - 3, playerAttack);
      enemyHealth = Math.max(0, enemyHealth - damage);

      // Log a resulting message to the console so we know that it worked.
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
      }

      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemyAttack - 3, enemyAttack);

      playerHealth = Math.max(0, playerHealth - damage);

      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }

    } 
  }
}

// function to start a new game
var startGame = function() {
   // reset player stats
   playerHealth = 100;
   playerAttack = 10;
   playerMoney = 10;
   enemyHealth = Math.floor(Math.random() * 60);

  for (var i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {
      // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
  
      // reset enemyHealth before starting new fight
      enemyHealth = Math.floor(Math.random() * 21) + 40;

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      // if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
         // ask if user wants to use the store before next round
         var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        
         // if yes, take them to the store() function
         if (storeConfirm) {
          shop();
         }
      }
    }
  
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }

      // function to end the entire game
  var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
      window.alert("You've lost your robot in battle.");
    }
  }

  

    endGame();

  }


  // ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");


if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
   // play again
   startGame();
};  

// start the game when the page loads

var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  // use switch to carry out action
switch (shopOptionPrompt) {
  case "refill": //new case
  case "REFILL":
    if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
  
      // increase health and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  
    break;
  case "upgrade"://new case
  case "UPGRADE":
    if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
     // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  
    break;
    case "leave"://new case
    case "LEAVE":
    window.alert("Leaving the store.");

    // do nothing, so function will end
    break;
    default:
    window.alert("You did not pick a valid option. Try again.");

    // call shop() again to force player to pick a valid option
    shop();
    break;
  }
};
startGame();
