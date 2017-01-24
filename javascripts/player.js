/*
  TODO: Modularize this code with IIFE or Browserify
 */
var BattleDome = BattleDome || {};
BattleDome.Bots = {};

/*
  Define the base object for any player of BattleDome,
  whether a Robot player or a monster.
 */
BattleDome.Bots.Player = function(name) {
  this.type = null;
  this.name = null;
  this.weapon = null;

  this.playerName = name || "Oscar the Grouch";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health ",
      (this.class.magical) ? "Able to cast " : " wielding a ",
      this.weapon.name,
      "!"
    ].join("");
    return output;
  };
};

BattleDome.Bots.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
};

// thom- this is not being used!
// BattleDome.Bots.Player.prototype.generateClass = function() {
//   // Get a random index from the allowed classes array
//   var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

//   // Get the string at the index
//   var randomClass = this.allowedClasses[random];
//   console.log("randomClass worked")
//   // Composes the corresponding player class into the player object
//   this.class = new BattleDome.Armory[randomClass]();

//   // Add the health bonus
//   this.health += this.class.healthBonus;
//   return this.class;
// };

/*
  Define the base properties for a Robot in a
  constructor function.
 */
BattleDome.Bots.Robot = function() {
  var randomSkin;

  this.species = "Robot";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk", "Wizard", "Sorcerer", "Thief", "Ninja", "Assassin"];
};
BattleDome.Bots.Robot.prototype = new BattleDome.Bots.Player();


/*
  Define the base properties for a monster in a
  constructor function.
 */
BattleDome.Bots.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

BattleDome.Bots.Monster.prototype = new BattleDome.Bots.Player();
