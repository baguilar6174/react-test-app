import { getUserEmail } from "../../src/base-test/11-async-await";

describe('Test on 11-async-await', () => {

  test('The user email should be an string and "janet.weaver@reqres.in"', async () => {

    const email = await getUserEmail();
    expect(typeof email).toBe("string");
    expect(email).toBe("janet.weaver@reqres.in");

  });

});