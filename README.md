# MCjs – Modular Chart Library

MCjs is a small **JavaScript chart component library** built on [Chart.js](https://www.chartjs.org/), designed to be reusable across multiple projects (plain JS, React, Vue). It provides a consistent style, safe chart reload, and easy extensibility.

---

## Features

- Modular chart components (BarChart, LineChart, etc.)
- Theme-based styling for consistent look
- Safe reload of charts (destroys previous instances)
- Works in plain JS, React, Vue
- Data loaded from JSON

---

## Using MCjs locally via Yarn link

You can use MCjs as a **local reusable library** in multiple projects without publishing it. This is perfect for development and prototyping.

### Link the library globally

In your MCjs repo:

```bash
cd /path/to/MCjs
yarn link
```

This registers the library globally under the name in package.json (e.g., "MCjs"). Then link in your project.

```
cd /path/to/my-app
yarn link "MCjs"
```

This creates a symlink in your node_modules pointing to the MCjs repo.

Changes made in MCjs are immediately reflected in your app.


Import and use charts

```js
import { BarChart, LineChart } from "MCjs";

// Plain JS example
const canvas = document.getElementById("myChart");
BarChart(canvas, data);

// React example
import React, { useRef, useEffect } from "react";

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

