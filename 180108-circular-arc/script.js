window.onload = () => {
  const svg = d3
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

  const fill = d3
    .scaleLinear()
    .domain([0, 9])
    .range(["red", "steelblue"]);

  const radius = d3
    .scaleLinear()
    .domain([0, 9])
    .range([180, 240]);

  const arc = d3
    .arc()
    .innerRadius(radius)
    .outerRadius(d => radius(d) + 9)
    .startAngle(0)
    .endAngle(Math.PI / 90);

  subGroups
    .selectAll("path")
    .data(d3.range(10))
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", fill)
    .attr("stroke", "black");
};
