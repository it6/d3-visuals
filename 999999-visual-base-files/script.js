window.onload = () => {
  const width = 960,
    height = 500,
    svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height),
    primaryGroup = svg.append("g").attr("transform", `translate(480, 250)`);
};
