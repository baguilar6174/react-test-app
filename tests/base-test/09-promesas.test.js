import { getHeroeByIdAsync } from "../../src/base-test/09-promesas";
import heroes from "../../src/data/heroes";

describe('Tests on 09-promesas', () => {

  test('getHeroeByIdAsync should return a hero', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then(hero => {
      expect(hero).toEqual(heroes.find( (heroe) => heroe.id === id ));
      done();
    });
  });

  test('getHeroeByIdAsync should an error when a hero does not exist', (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch(e => {
      expect(e).toBe("No se pudo encontrar el héroe");
      done();
    });
  });

});