window.onload = () => {
  const width = 960,
    height = 500,
    svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height),
    primaryGroup = svg.append("g").attr("transform", `translate(20, 20)`),
    colorScale = d3
      .scaleLinear()
      .domain([10, 0])
      .range(["hsl(62, 100%, 90%)", "hsl(228, 30%, 20%)"])
      .interpolate(d3.interpolateHcl),
    y = d3
      .scalePoint()
      .domain(d3.range(50))
      .range([10, height]),
    circles = primaryGroup
      .selectAll("circle")
      .data(y.domain())
      .enter()
      .append("circle")
      .attr("cx", 0)
      .attr("cy", y)
      .attr("fill", d => colorScale(Math.abs(d % 20 - 10)))
      .attr("r", 10)
      .transition()
      .duration(2500)
      .delay(d => d * 4)
      .on("start", function repeat() {
        d3
          .active(this)
          .attr("cx", width - 100)
          .transition()
          .attr("cx", 0)
          .transition()
          .on("start", repeat);
      });
};
