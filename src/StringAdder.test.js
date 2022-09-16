import sumString from "./stringAdder.js";

describe("SumString", () => {
  it("Deberia devolver 0 por una cadena vacia", () => {
    expect(sumString("")).toEqual(0);
  });
  it("Deberia devolver 1 cuando se ingresa el numero 1", () => {
    expect(sumString("1")).toEqual(1);
  });
  it("Deberia devolver 10 cuando se ingresa el numero 10", () => {
    expect(sumString("10")).toEqual(10);
  });
  it("Deberia devolver 111 cuando se ingresa el numero 111", () => {
    expect(sumString("111")).toEqual(111);
  });
  it("Deberia devolver 10 cuando se ingresa los numeros 4 y 6 separados por ,", () => {
    expect(sumString("4,6")).toEqual(10);
  });
  it("Deberia devolver 15 cuando se ingresa los numeros 4,6 y 5 separados por ,", () => {
    expect(sumString("4,6,5")).toEqual(15);
  });
});
