(function($, window, document) {

var BattleDome = BattleDome || {};
BattleDome.Armory = {};

/*
  Base function for a player, or enemy, class (profession)
 */
BattleDome.Armory.PlayerClass = function() {
  this.name = "Nobot";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
    console.log("this name");
  };
};

/*
    Bipedal Players
      -Bender
      -Calculon
      -Roberto
 */
BattleDome.Armory.Bipedal = function() {
  this.hasTwoLegs = true;
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
BattleDome.Armory.Bipedal.prototype = new BattleDome.Armory.PlayerClass();


BattleDome.Armory.Bender = function() {
  this.name = "Bender";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
BattleDome.Armory.Bender.prototype = new BattleDome.Armory.Bipedal();


BattleDome.Armory.Calculon = function() {
  this.name = "Calculon";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
BattleDome.Armory.Calculon.prototype = new BattleDome.Armory.Bipedal();


BattleDome.Armory.Roberto = function() {
  this.name = "Roberto";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
BattleDome.Armory.Roberto.prototype = new BattleDome.Armory.Bipedal();

/*
    ATV Players
    -Gladiator
    -Scorpion
 */
BattleDome.Armory.ATV = function() {
  this.name = "ATV";
  this.groundBased = true;
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
BattleDome.Armory.ATV.prototype = new BattleDome.Armory.PlayerClass();


BattleDome.Armory.Gladiator = function() {
  this.name = "Gladiator";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
BattleDome.Armory.Gladiator.prototype = new BattleDome.Armory.ATV();


BattleDome.Armory.Scorpion = function() {
  this.name = "Scorpion";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
BattleDome.Armory.Scorpion.prototype = new BattleDome.Armory.ATV();


/*
    Drone Players
      - Predator
      - Reaper
      - Avenger
 */
BattleDome.Armory.Drone = function() {
  this.name = "Drone";
  this.aerialBot = true;
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 0;
  this.intelligenceBonus = this.intelligenceBonus + 0;
};
BattleDome.Armory.Drone.prototype = new BattleDome.Armory.PlayerClass();


BattleDome.Armory.Predator = function() {
  this.name = "Predator";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus +5;
  this.intelligenceBonus = this.intelligenceBonus + 5;
};
BattleDome.Armory.Predator.prototype = new BattleDome.Armory.Drone();


BattleDome.Armory.Reaper = function() {
  this.name = "Reaper";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
BattleDome.Armory.Reaper.prototype = new BattleDome.Armory.Drone();


BattleDome.Armory.Avenger = function() {
  this.name = "Avenger";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 5;
  this.intelligenceBonus = this.intelligenceBonus + 15;
};
BattleDome.Armory.Avenger.prototype = new BattleDome.Armory.Drone();

}(window.jQuery, window, document));
