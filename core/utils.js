export function mapSeriesToDatasets(series, theme) {
  return series.map((serie, index) => ({
    label: serie.name,
    data: serie.values,
    backgroundColor: theme.colors[index % theme.colors.length],
    borderColor: theme.colors[index % theme.colors.length],
    borderWidth: theme.borderWidth
  }));
}
