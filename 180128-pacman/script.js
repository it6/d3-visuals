window.onload = () => {
  const width = 960,
    height = 500,
    svg = d3
      .select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height),
    primaryGroup = svg.append('g').attr('transform', `translate(480, 250)`);
  arc = full => {
    const endAngle = full ? Math.PI * 2 : Math.PI * 1.6;
    return d3
      .arc()
      .innerRadius(0)
      .outerRadius(100)
      .startAngle(0)
      .endAngle(endAngle);
  };

  const pacman = primaryGroup
    .append('path');

  let toggleFlag = false;

  d3.timer(() => {
    toggleFlag = !toggleFlag;
    if (toggleFlag) {
      pacman
        .transition(1000).delay(1000)
        .attr('d', arc(true)).attr('fill', 'white');
    } else {
      pacman
        .transition(1000).delay(1000)
        .attr('d', arc()).attr('fill', 'red');
    }
  }, 1000);
};
