import fs from "fs";

//hae sääennuste tekstitiedostosta
const forecastText = fs.readFileSync("forecast_data.json", "utf-8");

//muuta haetun tekstitiedoston sisältö JSON-muotoon
const forecastJson = JSON.parse(forecastText);

//tulosta alkuperäinen JSON, muokkaa lämpötila ja tulosta JSON uudelleen
console.log(forecastJson);
forecastJson.temperature = 30;
console.log(forecastJson);

//muuta JSON-muotoinen data uudelleen stringiksi
const forecastToText = JSON.stringify(forecastJson, null, 2);

//tallenna muokattu data annettuun tiedostoon
fs.writeFileSync("forecast_data.json", forecastToText, "utf-8");
