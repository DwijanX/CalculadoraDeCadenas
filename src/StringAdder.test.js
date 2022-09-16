import sumString from "./stringAdder.js";

describe("SumString", () => {
  it("Deberia devolver 0 por una cadena vacia", () => {
    expect(sumString("")).toEqual(0);
  });
});
