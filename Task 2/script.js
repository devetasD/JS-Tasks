/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const btn = document.getElementById("btn__element");
const state = document.getElementById("btn__state");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let count = Number(state.textContent);
  state.textContent = count + 1;
});
