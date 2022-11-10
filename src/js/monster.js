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
    let newMonster;
    let num = Math.floor(Math.random() * (100) + 1);
    if (num <= 60) {
      newMonster.hp -= 10;
    } else {
      newMonster.hp -= 25;
    }
  }

}