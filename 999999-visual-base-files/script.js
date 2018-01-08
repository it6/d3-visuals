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
};
