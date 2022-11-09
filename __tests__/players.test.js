
import Player from  "../src/js/players.js";

describe ("Player", () => {
  let newPlayer;

  beforeEach(() => {
    newPlayer = new Player(100,0,0);
  });

  test("it should make a player object", () => {
    expect(newPlayer.hp).toEqual(100);
  });

  test("should set str to 90 and magic to 40", () => {
    newPlayer.addWarrior();
    expect(newPlayer.str).toEqual(90);
    expect(newPlayer.magic).toEqual(40);
  });

});