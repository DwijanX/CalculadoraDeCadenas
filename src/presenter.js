
import sumString from "./stringAdder.js";

const StringField = document.querySelector("#StringField");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const StringToBeSummed = StringField.value;

  div.innerHTML = "<p>" + sumString(StringToBeSummed) + "</p>";
});
