// // Funkcija, kuri sugeneruoja integer skaičių.
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// // Funkcija, kuri sugeneruoja atsitiktinį float skaičių
// function getRandomFloat(min, max) {
//   return (Math.random() * (max - min) + min).toFixed(2);
// }

// // Funkcija, ciklas kurie atlieka perskaičiavimus ir atnaujina lentelės reikšmes. Taip pat eilučiu spalvos
// function count() {
//   for (let i = 1; i <= 4; i++) {
//     document.getElementById(`row${i}col2`).innerHTML = getRandomNumber(-10, 10);
//     document.getElementById(`row${i}col3`).innerHTML = getRandomNumber(-10, 10);
//     document.getElementById(`row${i}col4`).innerHTML = getRandomFloat(1, 10);
//     document.getElementById(`row${i}col5`).innerHTML = getRandomFloat(1, 10);
//   }
//   let columnsColor = [
//     "row5col2",
//     "row5col3",
//     "row5col4",
//     "row5col5",
//     "row6col2",
//     "row6col3",
//     "row6col4",
//     "row6col5",
//   ];
//   for (let i = 0; i < columnsColor.length; i++) {
//     document.getElementById(columnsColor[i]).style.backgroundColor = "#f0f8ff";
//   }

//   // Atnaujina Summary eilutės reikšmes
//   const rowData = [];
//   const summaryData = [];

//   for (let i = 1; i <= 6; i++) {
//     const col2 = parseInt(document.getElementById(`row${i}col2`).innerHTML);
//     const col3 = parseInt(document.getElementById(`row${i}col3`).innerHTML);
//     const col4 = parseFloat(document.getElementById(`row${i}col4`).innerHTML);
//     const col5 = parseFloat(document.getElementById(`row${i}col5`).innerHTML);

//     rowData.push([col2, col3, col4, col5]);
//     summaryData.push([col2, col3, col4, col5]);
//   }

//   const summaryCol2 = summaryData.reduce((acc, curr) => acc + curr[0], 0);
//   const summaryCol3 = summaryData.reduce((acc, curr) => acc + curr[1], 0);
//   const summaryCol4 = summaryData.reduce((acc, curr) => acc + curr[2], 0);
//   const summaryCol5 = summaryData.reduce((acc, curr) => acc + curr[3], 0);

//   document.getElementById("summaryCol2").innerHTML = summaryCol2;
//   document.getElementById("summaryCol3").innerHTML = summaryCol3;
//   document.getElementById("summaryCol4").innerHTML = summaryCol4.toFixed(2);
//   document.getElementById("summaryCol5").innerHTML = summaryCol5.toFixed(2);
// }

// // Pekrovimas ir automatinis paleidimas
// let automaticReloadInterval;

// function reload() {
//   count();
//   stopAutomaticReload();
// }

// function startAutomaticReload(interval = 10000) {
//   reload();
//   automaticReloadInterval = setInterval(reload, interval);
// }

// function stopAutomaticReload() {
//   clearInterval(automaticReloadInterval);
// }

class Table {
  constructor() {
    this.tableData = [
      ["Column 1", "Column 2", "Column 3", "Column 4", "Column 5"],
      ["Row 1", 10, 60, 0.16, 0.61],
      ["Row 2", 20, 50, 0.25, 0.52],
      ["Row 3", 30, 40, 0.34, 0.43],
      ["Row 4", 40, 30, 0.43, 0.34],
      ["Row 5", 50, 20, 0.52, 0.25],
      ["Row 6", 60, 10, 0.61, 0.16],
      ["Summary", 210, 210, 2.31, 2.31],
    ];
    this.autoReloadInterval = null;
    this.tableElement = document.createElement("table");
    this.reloadButton = document.createElement("button");
    this.autoReloadButton = document.createElement("button");
    this.initializeTable();
  }

  initializeTable() {
    this.generateTable();
    this.reloadButton.innerText = "Reload";
    this.reloadButton.addEventListener("click", this.handleReload.bind(this));
    this.autoReloadButton.innerText = "Automatic reload";
    this.autoReloadButton.addEventListener(
      "click",
      this.handleAutoReload.bind(this)
    );

    document.body.appendChild(this.tableElement);
    document.body.appendChild(this.reloadButton);
    document.body.appendChild(this.autoReloadButton);
  }

  handleReload() {
    this.updateTable();
    this.stopAutoReload();
  }

  handleAutoReload() {
    if (!this.autoReloadInterval) {
      this.autoReloadInterval = setInterval(() => {
        this.updateTable();
      }, 2000);
    }
  }

  updateTable() {
    for (let i = 1; i <= 4; i++) {
      this.tableData[i][1] = Math.floor(Math.random() * 100);
      this.tableData[i][2] = Math.floor(Math.random() * 100);
      this.tableData[i][3] = parseFloat((Math.random() * 10).toFixed(2));
      this.tableData[i][4] = parseFloat((Math.random() * 10).toFixed(2));
    }

    this.calculateSummary();
    this.generateTable();
  }

  calculateSummary() {
    const summaryRow = this.tableData[this.tableData.length - 1];

    for (let i = 1; i <= 4; i++) {
      let sum = 0;

      for (let j = 1; j <= 6; j++) {
        sum += this.tableData[j][i];
      }

      summaryRow[i] = i <= 2 ? Math.round(sum) : sum.toFixed(2);
    }
  }

  generateTable() {
    const newTableElement = document.createElement("table");

    for (let i = 0; i < this.tableData.length; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < this.tableData[i].length; j++) {
        const cell = document.createElement(i === 0 ? "th" : "td");
        const cellText = document.createTextNode(this.tableData[i][j]);

        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      newTableElement.appendChild(row);
    }

    this.tableElement.replaceWith(newTableElement);
    this.tableElement = newTableElement;
  }

  stopAutoReload() {
    clearInterval(this.autoReloadInterval);
    this.autoReloadInterval = null;
  }
}

const table = new Table();
