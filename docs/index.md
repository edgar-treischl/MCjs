
# MCjs – Modular Chart Library

MCjs is a small **JavaScript chart component library** built on [Chart.js](https://www.chartjs.org/). It is designed for **reusable, consistent, and maintainable charts** across multiple projects (plain JS, React, Vue). MCjs provides:

- A consistent theme and style  
- Safe chart reloads (destroys previous instances automatically)  
- Easy extensibility and per-instance configuration  

## Features

- Modular chart components (e.g., `BarChart`, `LineChart`)  
- Theme-based styling for a consistent look  
- Automatic destruction of previous chart instances  
- Works in plain JS, React, and Vue  
- Data-driven: charts can be loaded from JSON or JS objects  



## Installation & Local Development

You can use MCjs **locally** via `yarn link` for development or prototyping without publishing it.

### 1. Link the library globally

In your MCjs repo:

```bash
cd /path/to/MCjs
yarn link
```

This registers the library globally under the name in package.json (e.g., "MCjs").

### 2. Link in your project

```bash
cd /path/to/my-app
yarn link "MCjs"
```

This creates a symlink in your node_modules pointing to the MCjs repo.

Any changes made in MCjs are immediately reflected in your app.

### Usage – Plain JavaScript

After linking MCjs, you can import and use the chart components directly in your JavaScript code. For example, to render a bar chart:

```js
import { BarChart, LineChart } from "MCjs";

// Get a reference to the canvas element
const canvas = document.getElementById("myChart");

// Example data
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  series: [
    { name: '2025', values: [65, 59, 80, 81, 56] },
    { name: '2026', values: [28, 48, 40, 19, 86] }
  ]
};

// Render a bar chart
BarChart(canvas, data);

// Optional: Render a line chart
const lineCanvas = document.getElementById("lineChart");
LineChart(lineCanvas, data);
```

Any changes you make to the MCjs library will be immediately reflected in your project thanks to yarn link.


### React Example

```js
import React, { useRef, useEffect } from "react";
import { BarChart } from "MCjs";

function App() {
  const barCanvas = useRef(null);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      BarChart(barCanvas.current, data);
    }
    loadData();
  }, []);

  return <canvas ref={barCanvas}></canvas>;
}
```

### Optional Overrides

MCjs components accept an optional optionsOverride object to tweak Chart.js defaults, for example changing the legend position:

```js
BarChart(canvas, data, { plugins: { legend: { position: "bottom" } } })
```

## Using Vite for Bundling

MCjs is bundled via Vite for easy import into other projects:

```bash
yarn add -D vite
yarn vite build
```

This generates a single JS file (ES + UMD) from your src/index.js.
  - ES modules: import { BarChart } from "MCjs"
  - UMD: window.MCjs.BarChart(...)

## Documentation with VitePress

MCjs includes live documentation and examples via VitePress.

```bash
yarn add -D vitepress@next
````

Run Docs via:

```bash
yarn docs:dev      # local dev server
yarn docs:build    # build static site
yarn docs:serve    # serve built docs
```

## Recommended Workflow

Develop and test components locally in src/
Use yarn link for testing in your apps
Adjust theme and optionsOverride for per-project customization
Use Vite to bundle the library for other projects
Maintain docs in VitePress for examples and quick reference



## Getting Started

```bash
yarn add https://github.com/edgar-treischl/MCjs.git
```