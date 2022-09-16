import sumString from "./stringAdder.js";

describe("SumString", () => {
  it("Deberia devolver 0 por una cadena vacia", () => {
    expect(sumString("")).toEqual(0);
  });
  it("Deberia devolver 1 cuando se ingresa el numero 1", () => {
    expect(sumString("1")).toEqual(1);
  });
});
