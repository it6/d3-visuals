window.onload = () => {
  const data = [19, 12, 32],
    width = window.innerWidth,
    height = window.innerHeight,
    multiple = 10,
    yScale = d3.scaleLinear([height, 0]);

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
    .append('rect');

  rects
    .attr('x', (d, i) => i * 100)
    .attr('y', d => height - multiple * yScale(d))
    .attr('width', 20)
    .attr('height', d => yScale(d) * multiple);
};
