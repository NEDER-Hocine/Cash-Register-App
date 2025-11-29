let price = 19.5;
let cid = [
  ['PENNY', 0],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0.5],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];
let cash;
let currencies = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const totalPrice = document.getElementById("price");
const cashInDrawer = document.getElementById("cid");
const changeDue = document.getElementById("change-due");

const updateRegister = () => {
  totalPrice.textContent = `$${price}`;
  cashInDrawer.innerHTML = `Change in drawer:<br><br>`
  cid.forEach((el) => {
    cashInDrawer.innerHTML += `${el[0]}: $${el[1]}<br>`
  });
}

updateRegister();

const returnChange = () => {

  changeDue.innerHTML = "";
  cash = Number(cashInput.value);

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    return; 
  }

  let change = cash - price;
  let amountFromDrawer = [];
  const reversedCid = [...cid].reverse();
  
  currencies.forEach((currency, index) => {

    let coins = 0;

    while (change >= currency && (cid[cid.length - 1 - index][1] - currency).toFixed(2) >= 0) {

      change = (change - currency).toFixed(2);
      cid[cid.length - 1 - index][1] = (cid[cid.length - 1 - index][1] - currency).toFixed(2);
      coins ++;

      if (coins === 1) {
        amountFromDrawer.push([reversedCid[index][0], 0]);
      }

    }
    if (coins > 0) {
    amountFromDrawer[amountFromDrawer.length - 1][1] = coins * currency;
    
    }
  });

  updateRegister();

  if (parseFloat(change) !== 0) {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  if (cid.every((el) => parseFloat(el[1]) === 0) === true) {
    changeDue.innerHTML = "Status: CLOSED<br><br>";
  } else {
  changeDue.innerHTML = "Status: OPEN<br><br>";
  }
  amountFromDrawer.forEach(amount => {
    changeDue.innerHTML += `${amount[0]}: $${amount[1]}<br>`;
  })
}

purchaseBtn.addEventListener("click", returnChange);