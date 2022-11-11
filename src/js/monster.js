

export default class Monster {
  constructor(hp) {
    this.hp = hp;
  }


  monsterCrit() {
    let critHit = 25;
    this.hp -= critHit;
  }

  monsterRegHit() {
    let regHit = 10;
    this.hp -= regHit;
  }

  randomNum() {
    let roll = Math.floor(Math.random() * (100) + 1);
    if (roll <= 100) {
      return roll;
    }
  }

  attack() {
    let num = Math.floor(Math.random() * (100) + 1);
    if (this.hp <= 0) {
      return "You won!";
    } else if (num <= 60) {
      this.hp -= 10;
    } else {
      this.hp -= 25;
    }
  }
  isDead() {
    if (this.hp <= 0) {
      return "you won";
    }

  }
} 
