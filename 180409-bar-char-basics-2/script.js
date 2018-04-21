window.onload = () => {
  const data = [19, 12, 32],
    width = window.innerWidth,
    height = window.innerHeight,
    multiple = 10,
    yScale = d3.scaleLinear([height, 0]),
    xScale = d3.scaleLinear(d3.extent(data)).range([0, width]),
    xAxis = d3.axisBottom(xScale).ticks(10),
    yAxisScale = d3.scaleLinear([height, 0]).range([height, 0]),
    yAxis = d3.axisLeft(yAxisScale).ticks(10);

  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('stroke', 'red')
    .attr('stroke-width', '2')
    .attr('fill', 'teal')
    .attr('height', height);

  const rects = svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .on('click', () => console.log('clicked'));

  rects
    .attr('x', i => i * 5)
    .attr('y', d => height - multiple * yScale(d))
    .attr('width', 20)
    .attr('height', d => yScale(d) * multiple);

  svg
    .append('g')
    .call(xAxis)
    .attr('transform', `translate(0, ${height - 50})`);

  svg
    .append('g')
    .call(yAxis)
    .attr('transform', `translate(50, 20)`);
};
