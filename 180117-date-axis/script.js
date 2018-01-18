window.onload = () => {
  const width = 960,
    height = 500,
    svg = d3
      .select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height),
    primaryGroup = svg
      .append('g')
      .attr('transform', `translate(0, ${height / 2})`),
    duration = 2500,
    xScale = d3
      .scaleTime()
      .range([0, width])
      .domain([new Date('2018-02-01'), new Date('2018-02-10')]),
    xAxis = d3
      .axisBottom(xScale)
      .tickFormat(d3.timeFormat('%m/%d'))
      .tickSize(20),
    updateXAxis = () =>
      xScale.domain([
        new Date('2018-02-01'),
        new Date(`2018-02-${Math.floor(Math.random() * 28)}`)
      ]);

  primaryGroup.call(xAxis);

  setInterval(function() {
    updateXAxis();
    primaryGroup
      .transition()
      .duration(duration / 2)
      .call(xAxis);
  }, duration);
};
