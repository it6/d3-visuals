window.onload = () => {
  const width = window.innerWidth,
    height = window.innerHeight,
    strokeWidth = 25,
    r = 150;

  const arc = d3
    .arc()
    .innerRadius(40)
    .outerRadius(r)
    .startAngle(0)
    .endAngle(2 * Math.PI);

  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const g = svg
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

  g
    .append('path')
    .attr('d', arc)
    .attr('stroke', 'red')
    .attr('stroke-width', strokeWidth)
    .attr('fill', 'green');
};
