import { revertString } from "../index.js";

describe("test reverse of string", () => {
  it("string with numbers", () => {
    const result = revertString('12345');
    expect(result).toBe('54321');
  }),
  it("string with characters", () => {
    const result = revertString('abcde');
    expect(result).toBe('edcba');
  })
    ;
});
