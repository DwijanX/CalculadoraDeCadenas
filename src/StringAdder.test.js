import stringCalculator from "./stringAdder.js";

describe("strcalc.getSumFrom", () => {
  let strcalc;
  beforeEach(()=>{
    strcalc = new stringCalculator();
  })
  it("Deberia devolver 0 por una cadena vacia", () => {
    expect(strcalc.getSumFrom("")).toEqual(0);
  });
  it("Deberia devolver 1 cuando se ingresa el numero 1", () => {
    expect(strcalc.getSumFrom("1")).toEqual(1);
  });
  it("Deberia devolver 10 cuando se ingresa el numero 10", () => {
    expect(strcalc.getSumFrom("10")).toEqual(10);
  });
  it("Deberia devolver 111 cuando se ingresa el numero 111", () => {
    expect(strcalc.getSumFrom("111")).toEqual(111);
  });
  it("Deberia devolver 10 cuando se ingresa los numeros 4 y 6 separados por ,", () => {
    expect(strcalc.getSumFrom("4,6")).toEqual(10);
  });
  it("Deberia devolver 15 cuando se ingresa los numeros 4,6 y 5 separados por ,", () => {
    expect(strcalc.getSumFrom("4,6,5")).toEqual(15);
  });
  it("Deberia devolver 20 cuando se ingresa los numeros 4,10 y 6 separados por -", () => {
    expect(strcalc.getSumFrom("4-10-6")).toEqual(20);
  });
  it("Deberia devolver 30 cuando se ingresa los numeros 4,10 y 16 separados por - y ,", () => {
    expect(strcalc.getSumFrom("4-10,16")).toEqual(30);
  });
  it("Deberia devolver 30 cuando se ingresa los numeros 4,10 y 16 separados por un separador especial", () => {
    expect(strcalc.getSumFrom("//[;]\n 4;10;16")).toEqual(30);
  });
  it("Deberia devolver 30 cuando se ingresa los numeros 4,10 y 16 separados por un separador especial y comas", () => {
    expect(strcalc.getSumFrom("//[;]\n 4;10,16")).toEqual(30);
  });
  it("Deberia devolver 30 cuando se ingresa los numeros 4,10 y 16 separados por un separador especial de longitud mayor a 1", () => {
    expect(strcalc.getSumFrom("//[;;]\n 4;;10;;16")).toEqual(30);
  });
  it("Deberia devolver 45 cuando se ingresa los numeros 9,20 y 16 separados por un separador especial de longitud mayor a 1 y un separador ya conocido", () => {
    expect(strcalc.getSumFrom("//[;;]\n 9;;20,16")).toEqual(45);
  });
  it("Deberia devolver 300 cuando se ingresa los numeros 4,10 y 16 separados por varios separadores especiales", () => {
    expect(strcalc.getSumFrom("//[;;][`][!]\n 10;;100;;160`20!10")).toEqual(300);
  });
  it("Deberia devolver 0 cuando se ingresa el numero 1001", () => {
    expect(strcalc.getSumFrom("1001")).toEqual(0);
  });
  it("Deberia devolver 1500 cuando se ingresa los numeros 1000,500,1001 ", () => {
    expect(strcalc.getSumFrom("//[***]\n 1000***500***1001")).toEqual(1500);
  });
});
