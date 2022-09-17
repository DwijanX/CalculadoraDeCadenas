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
  it("Deberia devolver 20 cuando se ingresa los numeros 4,10 y 6 separados por -", () => {
    expect(sumString("4-10-6")).toEqual(20);
  });
  it("Deberia devolver 30 cuando se ingresa los numeros 4,10 y 16 separados por - y ,", () => {
    expect(sumString("4-10,16")).toEqual(30);
  });
  it("Deberia devolver 30 cuando se ingresa los numeros 4,10 y 16 separados por un separador especial", () => {
    expect(sumString("//[;]\n 4;10;16")).toEqual(30);
  });
  it("Deberia devolver 30 cuando se ingresa los numeros 4,10 y 16 separados por un separador especial y comas", () => {
    expect(sumString("//[;]\n 4;10,16")).toEqual(30);
  });
  it("Deberia devolver 30 cuando se ingresa los numeros 4,10 y 16 separados por un separador especial de longitud mayor a 1", () => {
    expect(sumString("//[;;]\n 4;;10;;16")).toEqual(30);
  });
  it("Deberia devolver 45 cuando se ingresa los numeros 9,20 y 16 separados por un separador especial de longitud mayor a 1 y un separador ya conocido", () => {
    expect(sumString("//[;;]\n 9;;20,16")).toEqual(45);
  });
});
