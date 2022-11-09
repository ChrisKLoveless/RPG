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
  
}
