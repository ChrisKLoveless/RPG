import Monster from "../src/js/monster";

describe ("Monster", () => {
  let newMonster;

  beforeEach(() => {
    newMonster = new Monster(150);
  });
  
  test("this test should make a monster object", () => { 
    expect(newMonster.hp).toEqual(150); 
  });

});