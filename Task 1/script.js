/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const numberInput = document.querySelector("#search");
const resultDisplay = document.querySelector("#output");

document.querySelector("form").addEventListener("submit", convertWeight);

function convertWeight(e) {
  e.preventDefault();
  const kilo = numberInput.value;
  const pounds = kilo * 2.2046;
  const grams = kilo / 0.001;
  const ounces = kilo * 35.274;

  const result = `Equals ${pounds} lb |or| ${grams} g |or| ${ounces} oz ;`;

  resultDisplay.append(result);
}
