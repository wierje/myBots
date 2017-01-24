 "esversion; 6";
$(document).ready(function() {

// Creating new player objects for Bots//////////////////
var playerOne = new BattleDome.Bots.Robot();
var playerTwo = new BattleDome.Bots.Robot();
  /*
    Show the initial view that accepts player name
   */
  $("#playerOne-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");

        function beginCombat(playerOne) {
          orc = new BattleDome.Bots.Orc();
          orc.generateClass();
          console.log(orc.health);
          orcHealth = orc.health;
          console.log("orc's health: ", orcHealth);
          playerHealth = playerOne.health;
          console.log("Robot health: ", playerHealth);
          orc.setWeapon(new BroadSword());
          console.log(orc.toString());
          console.log(orc);
          $("#inputEnemyStats").text(orc.toString());
          $("#inputPlayerStats").append(playerOne.toString());
        }
        beginCombat(playerOne);
      }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });
/*new code: when attack button is pressed event listener*/
  $(".attack__button").click(function(e) {
    console.log("you pressed the attack button");
    // var foe = new BattleDome.Bots.Monster();
    // console.log("spell: ", spell.toString());
    // console.log("player one health at start: ", playerHealth);
    var player1Damage = playerOne.weapon.attackDamage();
    console.log("player one inflicts this damage: ", player1Damage);
    var orcDamage = orc.weapon.attackDamage();
    console.log("orc inflicts this damage: ", orcDamage);
    console.log("orc health: ", orc.health);
    console.log("Robot health: ",playerOne.health);
    orc.health = orc.health - player1Damage;
    playerOne.health = playerOne.health - orcDamage;
    console.log("The orc's health is now: ", orc.health);
    console.log(playerOne.playerName, "'s health is now: ", playerOne.health);
    $("#inputPlayerAttack").text(playerOne.playerName + playerOne.weapon.toString(player1Damage));
    $("#inputPlayerAttack").append("<p>" + playerOne.playerName + "'s hitpoints are now " + playerOne.health + "." + "</p>");

    // $("#inputEnemyAttack").text(orc.weapon.toString(orcDamage));
    $("#inputEnemyAttack").text("Badguy Bill" + " hits with " + orc.weapon.name + " for " + orcDamage + "!")
    $("#inputEnemyAttack").append("<p>" + "Badguy Bill" + " hitpoints are now " + orc.health + "." + "</p>")
    finalCountdown(orc);
  });
});

function finalCountdown(orc){
  if (playerOne.health <= 0){
    $("#hideAttack").hide()
    // $("#hideAttack").prop('disabled', true)
    console.log ("YOU LOSE!");
    $("#finalCountdown").text("YOU LOSE!");
  }
  else
    if (orc.health<=0){
    $("#hideAttack").hide();
      $("#finalCountdown").prop('disabled', true);
      console.log ("YOU WIN!");
      $("#finalCountdown").text("YOU WIN!");
    }
  }
