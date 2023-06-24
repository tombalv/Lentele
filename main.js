// Funkcija, kuri sugeneruoja integer skaičių.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Funkcija, kuri sugeneruoja atsitiktinį float skaičių
function getRandomFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

// Funkcija, ciklas kurie atlieka perskaičiavimus ir atnaujina lentelės reikšmes. Taip pat eilučiu spalvos
function count() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`row${i}col2`).innerHTML = getRandomNumber(-10, 10);
    document.getElementById(`row${i}col3`).innerHTML = getRandomNumber(-10, 10);
    document.getElementById(`row${i}col4`).innerHTML = getRandomFloat(1, 10);
    document.getElementById(`row${i}col5`).innerHTML = getRandomFloat(1, 10);
  }
  let columnsColor = [
    "row5col2",
    "row5col3",
    "row5col4",
    "row5col5",
    "row6col2",
    "row6col3",
    "row6col4",
    "row6col5",
  ];
  for (let i = 0; i < columnsColor.length; i++) {
    document.getElementById(columnsColor[i]).style.backgroundColor = "#f0f8ff";
  }

  // Atnaujina Summary eilutės reikšmes
  const rowData = [];
  const summaryData = [];

  for (let i = 1; i <= 6; i++) {
    const col2 = parseInt(document.getElementById(`row${i}col2`).innerHTML);
    const col3 = parseInt(document.getElementById(`row${i}col3`).innerHTML);
    const col4 = parseFloat(document.getElementById(`row${i}col4`).innerHTML);
    const col5 = parseFloat(document.getElementById(`row${i}col5`).innerHTML);

    rowData.push([col2, col3, col4, col5]);
    summaryData.push([col2, col3, col4, col5]);
  }

  const summaryCol2 = summaryData.reduce((acc, curr) => acc + curr[0], 0);
  const summaryCol3 = summaryData.reduce((acc, curr) => acc + curr[1], 0);
  const summaryCol4 = summaryData.reduce((acc, curr) => acc + curr[2], 0);
  const summaryCol5 = summaryData.reduce((acc, curr) => acc + curr[3], 0);

  document.getElementById("summaryCol2").innerHTML = summaryCol2;
  document.getElementById("summaryCol3").innerHTML = summaryCol3;
  document.getElementById("summaryCol4").innerHTML = summaryCol4.toFixed(2);
  document.getElementById("summaryCol5").innerHTML = summaryCol5.toFixed(2);
}

// Pekrovimas ir automatinis paleidimas
let automaticReloadInterval;

function reload() {
  count();
  stopAutomaticReload();
}

function startAutomaticReload(interval = 10000) {
  reload();
  automaticReloadInterval = setInterval(reload, interval);
}

function stopAutomaticReload() {
  clearInterval(automaticReloadInterval);
}
