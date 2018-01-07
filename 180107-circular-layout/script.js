window.onload = () => {
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", 960)
    .attr("height", 500)
    .append("g")
    .attr("transform", "translate(480,250)");

  var g = svg
    .selectAll("g")
    .data(d3.range(0, 360, 2))
    .enter()
    .append("g")
    .attr("transform", function(d) {
      return "rotate(" + d + ")";
    });

  var circle = g
    .selectAll("circle")
    .data(d3.range(10))
    .enter()
    .append("circle")
    .attr(
      "cx",
      d3
        .scaleLinear()
        .domain([0, 9])
        .range([180, 240])
    )
    .attr("r", 4.5)
    .attr(
      "fill",
      d3
        .scaleLinear()
        .domain([0, 9])
        .range(["brown", "steelblue"])
    )
    .attr("stroke", "black");
};
