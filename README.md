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


---

## GitHub

For quick testing or small projects, you can install MCjs directly from a GitHub repository without publishing it to a registry.

### Install from GitHub

```bash
yarn add github:username/MCjs
```
Replace username with your GitHub username or organization.
Installs the library from the default branch.
Works in plain JS, React, or Vue projects.

## Import and use charts

```js
import { BarChart, LineChart } from "MCjs";

const canvas = document.getElementById("myChart");
BarChart(canvas, data);
```

⚠️ Notes
Versioning is limited — updates are tied to Git commit hashes or tags.
Suitable for prototypes or single-project use, not for multiple production apps.

Next step: Using MCjs via GitHub Packages (private npm registry)

We added Vite bundle your chart library into a single JS file for easy import.

```bash
yarn add -D vite  
yarn vite build

```

## Vite Press


We added VitePress for live documentation and examples.

```bash
yarn add -D vitepress@next
```



```bash
yarn docs:dev
yarn docs:build
yarn vitepress build docs

yarn vite build

```


