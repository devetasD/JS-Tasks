/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    createCards(data);
  })
  .catch((err) => console.log(err));

function createCards(data) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += `  <div class="row">`;
  for (let i = 0; i < data.length; i++) {
    const content = `
    <div class="column">
    <div class="card">
    <h2>${data[i].brand}</h2>
    <p>${data[i].models}</p> </div>
  </div>
       
    `;

    outputDiv.innerHTML += content;
  }
  outputDiv.innerHTML + `  </div>`;
}
