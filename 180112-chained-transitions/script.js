window.onload = () => {
  const width = 960,
    height = 500,
    svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height),
    primaryGroup = svg.append("g").attr("transform", `translate(40, 250)`),
    circles = primaryGroup
      .selectAll("circle")
      .data(d3.range(30))
      .enter()
      .append("circle")
      .attr("cx", d => d * d)
      .attr("cy", 10)
      .attr("fill", "red")
      .attr("stroke-width", "10")
      .attr("r", 10);

  const y = d3
    .scaleLinear()
    .domain(d3.range(30))
    .range([0, height]);
};
