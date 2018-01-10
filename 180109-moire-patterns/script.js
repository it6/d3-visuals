window.onload = () => {
  const width = 960,
    height = 500,
    svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height),
    primaryGroup = svg.append("g");

  primaryGroup
    .selectAll("circle")
    .data(d3.range(130))
    .enter("")
    .append("circle")
    .attr("r", d => d * 5)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("cx", width / 2)
    .attr("cy", height / 2);

  const circle = svg
    .append("g")
    .selectAll("circle")
    .data(d3.range(60))
    .enter()
    .append("circle");

  svg.on("mousemove", function() {
    const mouseCoordinates = d3.mouse(this);

    circle
      .attr("transform", `translate(${mouseCoordinates})`)
      .attr("r", d => d * 3)
      .attr("fill", "none")
      .attr("fill", "none")
      .attr("stroke", "black");
  });
};
