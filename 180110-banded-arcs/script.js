window.onload = () => {
  const width = 960,
    height = 500,
    svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height),
    primaryGroup = svg.append("g").attr("transform", `translate(480, 250)`),
    data = d3.range(20),
    scale = d3
      .scaleLinear()
      .domain(d3.extent(data))
      .range([0, 2 * Math.PI]),
    arc = d3
      .arc()
      .innerRadius(160)
      .outerRadius(170)
      .startAngle(d => scale(d))
      .endAngle(d => scale(d) + scale(0.8));

  primaryGroup
    .selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", "steelblue");
};
