import { BarChart } from "./components/BarChart.js";

async function main() {
  // Fetch data from JSON
  const response = await fetch("./data/data.json");
  const data = await response.json();

  // Get canvas and render chart
  const canvas = document.getElementById("myChart");
  BarChart(canvas, data);
}

// Start the app
main();
