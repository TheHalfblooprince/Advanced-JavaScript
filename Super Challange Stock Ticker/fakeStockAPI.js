function getStockData() {
  const dateOjb = new Date();
  const hoursStamp = dateOjb.getHours().toString();
  const minutesStamp = dateOjb.getMinutes().toString();
  const secondsStamp = dateOjb.getSeconds().toString();
  const timeStamp = `${hoursStamp}/${minutesStamp}/${secondsStamp}`;
  return {
    name: "QtechAI",
    sym: "QTA",
    price: Math.floor(Math.random() * 3).toFixed(2),
    time: timeStamp,
  };
}

export default getStockData;
