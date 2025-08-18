let price = 3.26;
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
const totalElement = document.getElementById("price");
const cidElements = Array.from(document.querySelectorAll("#cash-disponibility > span"))
const cashInput = document.getElementById("cash");
const purshaseButton = document.getElementById("purchase-btn");
const changeDueElement = document.getElementById("change-due");

const fillData = (cid) => {
  totalElement.textContent = price;
  cid.forEach((cashDisponibility, index) => {
  cidElements[index].textContent = cashDisponibility[1];
})
}

fillData(cid);

const getTotalChangeInDrawer = (cid) => cid.reduce((accumulator, currencyUnit) => accumulator + currencyUnit[1], 0)

const round = float => Math.round(float * 100) / 100;

const updateStatus = (cid, changeDue) => {
  const unitValues = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  const cidCopy = [...cid];
  let totalCashForUnit = 0;
  unitValues.forEach((unitValue, index) => {
    while (cidCopy[cid.length - 1 - index][1] > 0 && changeDue >= unitValue) {
      totalCashForUnit = round(totalCashForUnit + unitValue);
      cidCopy[cid.length - 1 - index][1] = round(cidCopy[cid.length - 1 - index][1] - unitValue);
      changeDue = round(changeDue - unitValue);
    }
    if (totalCashForUnit > 0) {
      changeDueElement.innerHTML += `<p>${cidCopy[cid.length - 1 - index][0]}: $${totalCashForUnit}</p>`
      totalCashForUnit = 0
    }
  })
  if (changeDue > 0) {
    changeDueElement.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>"
  } else {
    cid = cidCopy;
  }
}

const cashRegister = () => {
  const paid = parseFloat(cashInput.value);
  if (isNaN(paid)) {
    return;
  }
  if (paid < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  const changeDue = paid - price;
  const totalChangeInDrawer = getTotalChangeInDrawer(cid);

  if (totalChangeInDrawer - changeDue < 0) {
    changeDueElement.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`
    return;
  } else if (price === paid) {
    changeDueElement.innerHTML = "<p>No change due - customer paid with exact cash</p>";
    return;
  } else if (totalChangeInDrawer === changeDue) {
    changeDueElement.innerHTML = `<p>Status: CLOSED</p>`
  } else {
    changeDueElement.innerHTML = `<p>Status: OPEN</p>`
  }

  updateStatus(cid, changeDue);
  fillData(cid);

}

purshaseButton.addEventListener("click", cashRegister)

