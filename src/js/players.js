export default class Player {
  constructor(hp, str, magic) {
    this.hp = hp;
    this.magic = magic;
    this.str = str;
  }

  addWarrior() {
    this.str = 90;
    this.magic = 40;
  }

  addMage() {
    this.str = 40;
    this.magic = 90;
  }

  addHunter() {
    this.str = 70;
    this.magic = 70;
  }

  addDruid() {
    this.str = 80;
    this.magic = 80;
  }

  rollDmg() {
    let roll = Math.floor(Math.random() * (100) + 1);
    if (roll <= 100) {
      return 10;
    } 
  }
}