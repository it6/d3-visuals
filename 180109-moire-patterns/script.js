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
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const circle = svg
    .append("g")
    .selectAll("circle")
    .data(d3.range(60))
    .enter()
    .append("circle");

  // all circles fill none and stroke black
  svg
    .selectAll("circle")
    .attr("fill", "none")
    .attr("stroke", "black");

  svg.on("mousemove", function() {
    const mouseCoordinates = d3.mouse(this),
      r = (Math.sqrt(mouseCoordinates[0]) + 10) / 10;

    circle
      .attr("transform", `translate(${mouseCoordinates})`)
      .attr("r", d => d * r);
  });
};
