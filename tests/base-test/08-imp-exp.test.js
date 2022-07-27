import { getHeroById, getHerosByOwner } from "../../src/base-test/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Tests on 08-imp-exp', () => {
  
  test('getHeroById should return a hero', () => {
    
    const id = 1;
    const hero = getHeroById(id);
    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC"
    })

  });

  test('getHeroById should return undefined when a hero does not exist', () => {
    
    const id = 99;
    const hero = getHeroById(id);
    expect(hero).toBeUndefined();
    expect(hero).toBeFalsy();

  });

  test('getHerosByOwner should return a hero by owner', () => {
    const owner = "DC";
    const heros = getHerosByOwner(owner);
    expect(heros.length).toBe(3);
    expect(heros).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
  });

});