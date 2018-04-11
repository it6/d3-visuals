window.onload = () => {
  const width = 400,
    height = 600,
    data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, height / 1.5]),
    svg = d3
      .select('body')
      .append('svg')
      .attr('width', () => width)
      .attr('height', () => height);

  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => 0)
    .attr('y', d => yScale(d))
    .attr('height', d => 10)
    .attr('width', d => yScale(d));
};
