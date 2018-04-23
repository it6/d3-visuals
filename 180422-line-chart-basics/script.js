window.onload = () => {
  const width = window.innerWidth,
    height = window.innerHeight;

  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const data = [{ x: 10, y: 30 }, { x: 200, y: 200 }, { x: 300, y: 30 }];

  const linePath = d3
    .line()
    .x(d => d.x)
    .y(d => d.y);

  svg
    .append('path')
    .datum(data)
    .attr('d', linePath)
    .attr('stroke', 'blue')
    .attr('stroke-width', 20)
    .attr('fill', 'none');
};
