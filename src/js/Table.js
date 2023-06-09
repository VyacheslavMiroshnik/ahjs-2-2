export default class Table {
  constructor(object) {
    this.tableBody = document.querySelector("tbody");
    this.tableHead = document.querySelectorAll("th");
    this.count = 0;
    this.createTable(JSON.parse(object));
    this.allSorts = [
      this.sortByIdUp,
      this.sortByIdLow,
      this.sortByImdbUp,
      this.sortByImdbLow,
      this.sortByTitleUp,
      this.sortByTitleLow,
      this.sortByYearsUp,
      this.sortByYearsLow,
    ];
    // setTimeout(this.sortByIdUp.bind(this),1000)
    // setTimeout(this.sortByImdbUp.bind(this),1000)
    setInterval(this.changeSort.bind(this), 2000);
    // setTimeout(this.sortByYearsUp.bind(this),1000)
  }
  changeSort() {
    this.clearHead();
    this.allSorts[this.count % this.allSorts.length].bind(this).call(null);
    this.count += 1;
  }
  clearHead() {
    this.tableHead.forEach((el) => {
      el.innerHTML = el.innerHTML.split(" ")[0];
      console.log(el.innerHTML);
    });
  }
  createTable(objectList) {
    objectList.forEach((el) => {
      const tr = `<tr data-id = ${el.id} data-title = ${el.title} data-year= ${
        el.year
      } data-imdb = ${el.imdb}>
    <td>${el.id}</td>
    <td>${el.title}</td>
    <td>${el.year}</td>
    <td>IMDB : ${el.imdb.toFixed(2)}</td>
    </tr>`;
      this.tableBody.insertAdjacentHTML("beforeend", tr);
    });
  }
  updateTable(newTable) {
    const allTableRows = this.tableBody.querySelectorAll("tr");
    for (let i = 0; i < allTableRows.length; i += 1) {
      if (allTableRows[i] !== newTable[i]) {
        allTableRows[i].outerHTML = newTable[i].outerHTML;
      }
    }
    this.tableBody = document.querySelector("tbody");
  }
  sortByIdUp() {
    const allTableRows = this.tableBody.querySelectorAll("tr");
    const arr = Array.from(allTableRows).sort(
      (a, b) => parseInt(b.dataset["id"]) - parseInt(a.dataset["id"])
    );
    this.tableHead[0].innerHTML += " &uarr;";
    this.updateTable(arr);
  }
  sortByIdLow() {
    const allTableRows = this.tableBody.querySelectorAll("tr");
    const arr = Array.from(allTableRows).sort(
      (a, b) => parseInt(a.dataset["id"]) - parseInt(b.dataset["id"])
    );
    this.tableHead[0].innerHTML += " &darr;";
    this.updateTable(arr);
  }
  sortByTitleUp() {
    const allTableRows = this.tableBody.querySelectorAll("tr");
    const arr = Array.from(allTableRows).sort((a, b) => {
      if (a.dataset["title"].toLowerCase() < b.dataset["title"].toLowerCase()) {
        return 1;
      }
      if (a.dataset["title"].toLowerCase() > b.dataset["title"].toLowerCase()) {
        return -1;
      }
      return 0;
    });
    this.tableHead[1].innerHTML += " &uarr;";
    this.updateTable(arr);
  }
  sortByTitleLow() {
    const allTableRows = this.tableBody.querySelectorAll("tr");
    const arr = Array.from(allTableRows).sort((a, b) => {
      if (a.dataset["title"].toLowerCase() < b.dataset["title"].toLowerCase()) {
        return -1;
      }
      if (a.dataset["title"].toLowerCase() > b.dataset["title"].toLowerCase()) {
        return 1;
      }
      return 0;
    });
    this.tableHead[1].innerHTML += " &darr;";
    this.updateTable(arr);
  }
  sortByYearsUp() {
    const allTableRows = this.tableBody.querySelectorAll("tr");
    const arr = Array.from(allTableRows).sort(
      (a, b) => parseInt(b.dataset["year"]) - parseInt(a.dataset["year"])
    );
    this.tableHead[2].innerHTML += " &uarr;";
    this.updateTable(arr);
  }
  sortByYearsLow() {
    const allTableRows = this.tableBody.querySelectorAll("tr");
    const arr = Array.from(allTableRows).sort(
      (a, b) => parseInt(a.dataset["year"]) - parseInt(b.dataset["year"])
    );
    this.tableHead[2].innerHTML += " &darr;";
    this.updateTable(arr);
  }
  sortByImdbUp() {
    const allTableRows = this.tableBody.querySelectorAll("tr");
    const arr = Array.from(allTableRows).sort(
      (a, b) => parseInt(b.dataset["imdb"]) - parseInt(a.dataset["imdb"])
    );
    this.tableHead[3].innerHTML += " &uarr;";
    this.updateTable(arr);
  }
  sortByImdbLow() {
    const allTableRows = this.tableBody.querySelectorAll("tr");
    const arr = Array.from(allTableRows).sort(
      (a, b) => parseInt(a.dataset["imdb"]) - parseInt(b.dataset["imdb"])
    );
    this.tableHead[3].innerHTML += " &darr;";
    this.updateTable(arr);
  }
}
