import { BarChart } from "./components/BarChart.js";
import { LineChart } from "./components/LineChart.js";

async function main() {
  const response = await fetch("./data/data.json");
  const data = await response.json();

  const barCanvas = document.getElementById("barChart");
  const lineCanvas = document.getElementById("lineChart");

  BarChart(barCanvas, data);
  LineChart(lineCanvas, data);
}

main();
