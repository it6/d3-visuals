window.onload = () => {
  const width = 960,
    height = 500,
    svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height),
    gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%");

  gradient
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "steelblue")
    .attr("stop-opacity", 1);

  gradient
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#c00")
    .attr("stop-opacity", 1);

  svg
    .append("rect")
    .attr("fill", "url(#gradient)")
    .attr("width", width)
    .attr("height", height);

  const circle = svg.append("circle");

  svg.on("mousemove", function() {
    const mouseCoordinates = d3.mouse(this);
    circle
      .attr("fill", "yellow")
      .attr("cx", `${mouseCoordinates[0]}`)
      .attr("cy", `${mouseCoordinates[1]}`)
      .attr("r", 20);
  });
};
