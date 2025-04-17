import getStockData from "./fakeStockAPI";

let previousPrice = null;

function renderStockTicker(stockData) {
  let currentPrice = stockData.price;
  console.log("Current Price", currentPrice);

  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayPriceIcon = document.getElementById("price-icon");
  const stockDisplayTime = document.getElementById("time");

  stockDisplayName.innerText = stockData.name;
  stockDisplaySymbol.innerText = stockData.sym;
  stockDisplayPrice.innerText = stockData.price;
  stockDisplayPriceIcon.innerText =
    currentPrice > previousPrice
      ? "▲"
      : stockDisplayPrice == previousPrice
      ? "▶"
      : "🔻";
  stockDisplayTime.innerText = stockData.time;

  previousPrice = currentPrice;
  console.log("Previous Price", previousPrice);
}

setInterval(function () {
  renderStockTicker(getStockData());
}, 1500);
