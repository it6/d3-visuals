window.onload = () => {
  const width = 960,
    height = 500,
    data = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ],
    yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height - 100, 0]),
    xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, width]),
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
    .attr('x', d => yScale(d))
    .attr('y', d => yScale(d))
    .attr('height', d => height - yScale(d))
    .attr('width', d => 5);
};
