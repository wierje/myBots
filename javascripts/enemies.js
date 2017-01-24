BattleDome.Bots.Orc = function() {
  this.playerName = "Bad Guy Bill";
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman", "Assassin"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new BattleDome.Armory[randomClass]();
    return this.class;
  };
};

BattleDome.Bots.Orc.prototype = new BattleDome.Bots.Monster();
