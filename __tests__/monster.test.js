import Monster from "../src/js/monster";

describe ("Monster", () => {
  let newMonster;

  beforeEach(() => {
    newMonster = new Monster(150);
  });
  
  test("this test should make a monster object", () => { 
    expect(newMonster.hp).toEqual(150); 
  });
  
  test("should update the monster hp" , () => {
    newMonster.monsterCrit();
    expect(newMonster.hp).toEqual(125);
  });

  test("should update the monsters hp", () =>{
    newMonster.monsterRegHit();
    expect(newMonster.hp).toEqual(140);
  });
});