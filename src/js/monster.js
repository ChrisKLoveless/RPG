export default class Monster {
  constructor(hp) {
    this.hp = hp;
  }

  monsterCrit() {
    let critHit = 25;
    this.hp -= critHit;
  }

  monsterRegHit(){
    let regHit = 10;
    this.hp -= regHit;
  }
}