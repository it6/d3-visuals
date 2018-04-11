window.onload = () => {
  // const width = 960,
  //   height = 500,
  //   svg = d3
  //     .select("body")
  //     .append("svg")
  //     .attr("width", width)
  //     .attr("height", height),
  //   primaryGroup = svg.append("g").attr("transform", `translate(480, 250)`);

  console.log(11, d3);
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 200]);

  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', () => 400)
    .attr('height', () => 600);

  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => 0)
    .attr('yq', d => yScale(d))
    .attr('height', d => 10)
    .attr('width', d => yScale(d));
};
