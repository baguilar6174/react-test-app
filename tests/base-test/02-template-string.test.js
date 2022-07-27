import { getSaludo } from "../../src/base-test/02-template-string";

describe("Test on 02-template-string", () => {
	test('getSaludo should return "Hi Bryan"', () => {
		const name = "Bryan";
    const message = getSaludo(name);
    expect(message).toBe(`Hi ${name}`);
	});
});
