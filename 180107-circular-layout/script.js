window.onload = () => {
  const margin = { top: 20, bottom: 20, left: 20, right: 20 },
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom,
    svg = d3
      .select("body")
      .append("svg")
      .attr("width", 960)
      .attr("height", 500),
    primaryGroup = svg.append("g").attr("transform", `translate(480, 250)`);

  const subGroups = primaryGroup
    .selectAll("g")
    .data(d3.range(0, 360, 2))
    .enter()
    .append("g")
    .attr("transform", d => `rotate(${d})`);

  const circles = subGroups
    .selectAll("circle")
    .data(d3.range(10))
    .enter()
    .append("circle")
    .attr("r", 4)
    .attr(
      "cx",
      d3
        .scaleLinear()
        .domain([0, 9])
        .range([140, 190])
    )
    .attr(
      "fill",
      d3
        .scaleLinear()
        .domain([0, 9])
        .range(["red", "steelblue"])
    )
    .attr("stroke", "black");
};
