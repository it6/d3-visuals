window.onload = () => {
  const width = 800,
    height = 500;

  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', 800)
    .attr('height', 500);

  svg
    .selectAll('circle')
    .data(d3.range(100))
    .enter()
    .append('circle')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', '1')
    .attr('r', d => (d + 1) * 5);

  const circle = svg
    .append('g')
    .selectAll('circle')
    .data(d3.range(40))
    .enter()
    .append('circle')
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', '1')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
    .attr('r', d => d * 5);

  svg.on('mousemove', function() {
    const mouse = d3.mouse(this),
      r = (Math.sqrt(mouse[0]) + 10) / 10;
    circle
      .attr('transform', `translate(${mouse[0]}, ${mouse[1]})`)
      .attr('r', d => d * r);
  });
};
