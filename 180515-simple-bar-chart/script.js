window.onload = () => {
  const width = window.innerWidth,
    height = window.innerHeight,
    margin = { side: 20, top: 20 },
    data = [
      30,
      20,
      80,
      40,
      50,
      30,
      20,
      80,
      40,
      50,
      30,
      20,
      80,
      40,
      50,
      30,
      20,
      80,
      40,
      50,
      30,
      20,
      80,
      40,
      50,
      30,
      20,
      80,
      40,
      50,
      30,
      20,
      80,
      40,
      50
    ];

  const size = 20;

  const dataRange = d3.extent(data);

  const yScale = d3
    .scaleLinear()
    .domain([0, dataRange[1]])
    .range([height, 2 * size]);

  const xScale = d3
    .scaleLinear()
    .domain([0, data.length])
    .range([margin.side, width - margin.side]);

  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const rects = svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect');

  rects
    .attr('x', (d, i) => xScale(i))
    .attr('y', yScale)
    .attr('fill', '#00cec9')
    .attr('height', d => height - yScale(d) - margin.top)
    .attr('stroke-dasharray', '10, 4')
    .attr('stroke-width', 2)
    .attr('stroke', '#ff7675')
    .attr('width', size / 2);

  const xAxis = d3.axisBottom().scale(xScale);
  const xAxisPosition = height - margin.side;

  svg
    .append('g')
    .call(xAxis)
    .attr('transform', `translate(0, ${xAxisPosition})`);
};
