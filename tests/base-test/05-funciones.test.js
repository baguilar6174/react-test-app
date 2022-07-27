import { getUser, getUsuarioActivo } from "../../src/base-test/05-funciones";

describe('Test on 05-funciones', () => {
  test('getUser should return an object', () => {
    
    const mockUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    // We use toEqueal to compare objects
    expect(mockUser).toEqual(user);

  });

  test('getUsuarioActivo should return an object', () => {
    
    const name = "Bryan";

    const mockUser = {
      uid: "ABC567",
      username: name,
    };

    const user = getUsuarioActivo(name);

    // We use toEqueal to compare objects
    expect(mockUser).toEqual(user);

  });
});