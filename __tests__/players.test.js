
import Player from "../src/js/players.js";

describe("Player", () => {
  let newPlayer;

  beforeEach(() => {
    newPlayer = new Player(100, 0, 0);
  });

  test("it should make a player object", () => {
    expect(newPlayer.hp).toEqual(100);
  });

  test("should set str to 90 and magic to 40", () => {
    newPlayer.addWarrior();
    expect(newPlayer.str).toEqual(90);
    expect(newPlayer.magic).toEqual(40);
  });

  test("should set str to 40 and magic to 90", () => {
    newPlayer.addMage();
    expect(newPlayer.str).toEqual(40);
    expect(newPlayer.magic).toEqual(90);
  });

  test("should set str to 70 and magic to 70", () => {
    newPlayer.addHunter();
    expect(newPlayer.str).toEqual(70);
    expect(newPlayer.magic).toEqual(70);
  });
  test("should set str to 80 and magic to 80",  ()=> {
    newPlayer.addDruid();
    expect(newPlayer.str).toEqual(80);
    expect(newPlayer.magic).toEqual(80);
  });
});