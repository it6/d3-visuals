window.onload = () => {
  const margin = { top: 20, bottom: 20, left: 20, right: 20 },
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom,
    svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

  svg
    .selectAll("line")
    .data(d3.range(10))
    .enter()
    .append("line")
    .attr("x1", "0%")
    .attr("x2", "100%")
    .attr("y1", d => height * d / 10)
    .attr("y2", d => height * d / 10)
    .attr("stroke-dasharray", d => d + 1 + ",5")
    .attr("stroke", "green")
    .attr("stroke-width", "25");
};
